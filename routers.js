'use strict'

exports.init = ( router ) => {

	router.get( '/', reflectAction( 'home.index' ) )

	router.get( '/banner', reflectAction( 'banner.index' ) )

	router.get( '/test', function ( ctx ) {
		ctx.body = 123
	})

}