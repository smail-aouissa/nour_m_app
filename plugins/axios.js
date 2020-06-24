export default function ({store, $axios, app, redirect, error }) {

    /*
    ** Required headers
    */

    //$axios.setHeader('locale', app.$cookies.get('locale') || app.i18n.locale );

    $axios.setHeader('Accept', 'application/json');

    /*
    ** Error handling
    */
    $axios.onError(e => {
        if(e.response.status === 404){
            error({ statusCode: 404, message: 'Not found' })
        }
    })

    $axios.onResponse(response => {
        //
    })

}