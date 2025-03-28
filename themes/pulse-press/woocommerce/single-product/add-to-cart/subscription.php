<?php //testing
/**
 * Subscription Product Add to Cart
 *
 * @author  Prospress
 * @package WooCommerce-Subscriptions/Templates
 * @version 2.0.18
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

// Bail if the product isn't purchasable and that's not because it's limited
if ( ! $product->is_purchasable() && ( ! is_user_logged_in() || 'no' == wcs_get_product_limitation( $product ) ) ) {
	return;
}

$user_id = get_current_user_id();

if ( WC_Subscriptions::is_woocommerce_pre( '3.0' ) ) :
	$availability = $product->get_availability();
	if ( $availability['availability'] ) :
		echo wp_kses_post( apply_filters( 'woocommerce_stock_html', '<p class="stock '.$availability['class'].'">'.$availability['availability'].'</p>', $availability['availability'] ) );
	endif;
else :
	echo wp_kses_post( wc_get_stock_html( $product ) );
endif;

if ( ! $product->is_in_stock() ) : ?>
	<link itemprop="availability" href="http://schema.org/OutOfStock">
<?php else : ?>

	<link itemprop="availability" href="http://schema.org/InStock">

	<?php do_action( 'woocommerce_before_add_to_cart_form' ); ?>

	<?php if ( ! $product->is_purchasable() && 0 != $user_id && 'no' != wcs_get_product_limitation( $product ) && wcs_is_product_limited_for_user( $product, $user_id ) ) : ?>
		<?php $resubscribe_link = wcs_get_users_resubscribe_link_for_product( $product->get_id() ); ?>
		<?php if ( ! empty( $resubscribe_link ) && 'any' == wcs_get_product_limitation( $product ) && wcs_user_has_subscription( $user_id, $product->get_id(), wcs_get_product_limitation( $product ) ) && ! wcs_user_has_subscription( $user_id, $product->get_id(), 'active' ) && ! wcs_user_has_subscription( $user_id, $product->get_id(), 'on-hold' ) ) : // customer has an inactive subscription, maybe offer the renewal button ?>
			<a href="<?php echo esc_url( $resubscribe_link ); ?>" class="button product-resubscribe-link"><?php esc_html_e( 'Resubscribe', 'woocommerce-subscriptions' ); ?></a>
		<?php else : ?>
			<p class="limited-subscription-notice notice"><?php esc_html_e( 'You have an active subscription to this product already.', 'woocommerce-subscriptions' ); ?></p>
		<?php endif; ?>
	<?php else : ?>
	<form class="cart cell small-12" action="<?php echo esc_url( apply_filters( 'woocommerce_add_to_cart_form_action', $product->get_permalink() ) ); ?>" method="post" enctype='multipart/form-data'>

    <?php if(is_user_logged_in()){ ?>
    
		<?php do_action( 'woocommerce_before_add_to_cart_button' ); ?>
		<?php do_action( 'woocommerce_before_add_to_cart_quantity' ); ?>

    <input type="hidden" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" />
    
		<div class="input-group max-button no-margin qty_edits">
			<span class="input-group-label">Qty:</span>
		<?php
		if ( ! $product->is_sold_individually() ) {
			woocommerce_quantity_input( array(
				'min_value' => apply_filters( 'woocommerce_quantity_input_min', 1, $product ),
				'max_value' => apply_filters( 'woocommerce_quantity_input_max', $product->backorders_allowed() ? '' : $product->get_stock_quantity(), $product ),
				'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( $_POST['quantity'] ) : $product->get_min_purchase_quantity()
      ) );
		}
		?>
    </div>
    
			<div class="input-group-button add_cart_reform">
        <button type="submit" name="add-to-cart" value="<?php echo esc_attr( $product->get_id() ); ?>" class="single_add_to_cart_button button expanded alt" id="addCart_noreload"><?php echo esc_html( $product->single_add_to_cart_text() ); ?></button>
      </div>
    
      <div class="checkout_reform">
        <a class="button expanded alt" href="<?php echo get_site_url(); ?>/cart/">Checkout Now</a>
      </div>
    
      <script>
    
      let button = document.getElementById("addCart_noreload");
      button.addEventListener("click", function () {
        let text = document.getElementById("success_mssg");
        text.classList.remove("mssg_hidden");
        setTimeout(function () {
          text.classList.add("fade-in");
          setTimeout(function () {
            text.classList.remove("fade-in");
            setTimeout(function () {
              text.classList.add("mssg_hidden");
            }, 1000);
          }, 2000);
        });
      });
    
    </script>
    
	  <?php do_action( 'woocommerce_after_add_to_cart_quantity' ); ?>
		<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

    <?php }else{ ?>

      <a href="https://pulsevolleyball.com/account/" name="log-in-button" value="<?php echo esc_attr( $product->get_id() ); ?>" class="single_add_to_cart_button button expanded alt">Log In</a>
    
    <?php } ?>
    
	</form>
  <label class="message_container mssg_hidden" id="success_mssg">
      <div class="alert warning">
        <span class="alertText"> ✅ Products have been added to your cart, please proceed to checkout.
        <br class="clear"/></span>
      </div>
    </label>


	<?php endif; ?>

	<?php do_action( 'woocommerce_after_add_to_cart_form' ); ?>

<?php endif; ?>