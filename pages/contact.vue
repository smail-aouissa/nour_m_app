<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Accueil</nuxt-link></li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>

        <section class="contact-area ptb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span>Contactez-nous</h2>
                </div>

                <div class="row">
                    <div class="col-lg-5 col-md-12">
                        <div class="contact-info">
                            <h3>Nous sommes ici pour aider</h3>
                            <p>Vous avez une question? Vous pouvez nous appeler. Mais vous pouvez également nous contacter.</p>

                            <ul class="contact-list">
                                <li><i class="fas fa-map-marker-alt"></i> Location: Centre commercial « frique Bazar » Birkhadem, Alger</li>
                                <li><i class="fas fa-phone"></i> Appelez-nous: <a href="#">+213 (0) 553 31 09 76</a></li>
                                <li><i class="far fa-envelope"></i> Envoyez-nous un email: <a href="mailto:contact@noor-m.com">contact@noor-m.com</a></li>
                                <li><i class="fas fa-door-open"></i> Heures d'ouverture: <a href="#">8am–5pm</a></li>
                            </ul>

                            <h3>Heures d'ouverture:</h3>
                            <ul class="opening-hours">
                                <li><span>Dimanche:</span> 8H - 17H</li>
                                <li><span>Lundi:</span> 8H - 17H</li>
                                <li><span>Mardi:</span> 8H - 17H</li>
                                <li><span>Mercredi:</span> 8H - 17H</li>
                                <li><span>Jeudi:</span> 8H - 17H</li>
                                <li><span>Vendredi:</span> Fermée</li>
                                <li><span>Samedi:</span> 11H - 18H</li>

                            </ul>

                            <h3>Suivez-moi:</h3>
                            <ul class="social">
                                <li><a href="https://web.facebook.com/NOOR.M.COLLECTION"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.instagram.com/noor_m_officiel"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UChWu2gyOv_jObFMaocwOj6w"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-12">
                        <div class="contact-form">
                            <h3>Contactez-nous</h3>
                            <p>Nous serons ravis de répondre à toutes vos questions ou de vous fournir un devis. Envoyez-nous simplement un message dans le formulaire ci-dessous avec toutes les questions que vous pourriez avoir.</p>

                            <form id="contactForm" @submit.prevent="sendMessage">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Nom complet <span>(obligatoire)*</span></label>
                                            <input v-model="name" type="text" name="name" id="name" class="form-control" placeholder="Votre Nom">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Email <span>(obligatoire)*</span></label>
                                            <input v-model="email" type="email" name="email" id="email" class="form-control" placeholder="Votre Adresse Email">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Votre Message <span>(obligatoire)*</span></label>
                                            <textarea v-model="text" name="message" id="message" cols="30" rows="8" class="form-control" placeholder="Votre Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="btn btn-primary">Envoyer Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: null,
                email: null,
                text: null,
            }
        },
        methods:{
            sendMessage(){
                if(!this.name || !this.email || this.text ){
                    this.$toast.error("Veuillez verifier vos données");
                    return;
                }

                // TODO: send message to server
            }
        }
    }
</script>