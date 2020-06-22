export default function ({store, $axios, app, redirect }) {

    /*
    ** Required headers
    */

    //$axios.setHeader('locale', app.$cookies.get('locale') || app.i18n.locale );

    $axios.setHeader('Accept', 'application/json');

    /*
    ** Error handling
    */
    $axios.onError(error => {
        //redirect('/')
    })

    $axios.onResponse(response => {

    })

}