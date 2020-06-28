<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-footer-widget" style="background-color:cornsilk;padding: 21px;border-radius: 15px;">
                        <nuxt-link to="/"><span style="display: inline-flex;"><img width="100px" src="../assets/img/logo.png" alt="logo"></span></nuxt-link>
                        <p>Fondatrice d’ une ligne de vêtement pour femmes «  <strong>NOOR M PRO</strong> » influenceuse avec plus d’un million d’abonnés sur son compte instagram
                            La marque noor m aspirent à revitaliser le style de la femmes moderne algériennes </p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Liens rapides</h3>

                        <ul class="quick-links">
                            <li><i class="fa fa-home" aria-hidden="true"></i><nuxt-link to="/">Page d'Accueil</nuxt-link></li>
                            <li><i class="fa fa-shopping-cart" aria-hidden="true"></i><nuxt-link to="/cart">Mon panier</nuxt-link></li>
                            <li><i class="fa fa-heart" aria-hidden="true"></i><nuxt-link to="/wishlist">Favoris</nuxt-link></li>
                            <li><i class="fa fa-user" aria-hidden="true"></i><nuxt-link to="/about">A propos de moi</nuxt-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contactez-nous</h3>

                        <ul class="footer-contact-info">
                            <!-- <li><i class="fas fa-map-marker-alt"></i> Location: Centre commercial « frique Bazar » Birkhadem, Alger</li> -->
                            <li><i class="fas fa-phone"></i> Appelez-nous: <a href="#">+213 (0) 540 58 70 19</a></li>
                            <li><i class="far fa-envelope"></i> Envoyez-nous un email: <a href="mailto:contact@noor-m.com">contact@noor-m.com</a></li>
                            <!-- <li><i class="fas fa-door-open"></i> Heures d'ouverture: <a href="#">8H – 17H</a></li> -->
                            <div class="contact-info mt-1">
                                
                                <ul class="social">
                                    <li><a href="https://web.facebook.com/NOOR.M.COLLECTION"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/noor_m_officiel"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UChWu2gyOv_jObFMaocwOj6w"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 text-center">
                        <p>Copyright &copy; 2020. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>