'use strict'

const Base = require( './base' )

class Banner extends Base {
	index( ctx ) {
		this.assign( 'banner', ( done ) => {
			setTimeout(() => {
				done( 'sida qiekenao!' )
			}, 100 )
		})

		this.assign( 'banner1', 'hahhah')

		return this.fetchData().then(( data ) => {
			ctx.render( 'banner/index', data )
		})
	}
}

module.exports = Banner