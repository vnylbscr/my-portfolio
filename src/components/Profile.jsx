import React, { } from 'react';
import Resim from '../images/merto.jpg'
const Profile = (props) => {
    return (
        <div className="container">
            <div class="row">
                <div class='col-sm-6'>
                    <div class='container-left'>
                        <div className='image'>
                            <a href="/" class>
                                <img 
                                src={Resim} href="www.google.com" 
                                className='imgClass' 
                                style={{ width: 200, height: 300, borderRadius: 900 }} ></img>
                            </a>
                        </div>
                        <div className='nameTitle'>
                            <p class="text-left" >Mert</p>
                        </div>
                        <div className='infTitle'>
                            <p class='text-left'>Merhaba ben Mert. Sakarya Üniversitesi 4.sınıf Öğrencisiyim. Bitirme projemde React Native ile mobil uygulama geliştiriyorum. İlgilendiğim alanlar şöyle:        
                            <li class="nav-item">Mobil ve Native uygulamalar</li>
                            <li class="nav-item">Web Teknolojileri</li>
                            <li class="nav-item">Cloud Veri tabanları</li>
                            </p>
                            <p class='text-left' >Ayrıca beni <a href="https://www.twitter.com/accurcy" style={{ textDecoration: 'none' }}><strong>Twitter'da</strong></a> ve <a href="https://www.instagram.com/gencmert_" style={{ textDecoration: 'none' }}><strong>Instagram'da</strong></a> takip edebilirsin.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class='position-absolute'>
                        <div className="projectTitle">
                            <p class="text-center">Yaptığım bazı projeler</p>
                        </div>
                        <div>
                            <ul className='projectList'>
                                <a href='https://github.com/vnylbscr/ShellApp'>
                                <li>Shell Kabul uygulaması</li>
                                </a>
                                <a href='https://github.com/vnylbscr/HastaKayit' >
                                <li>C# ile basit hasta kayıt otamasyonu</li>
                                </a>
                                <a href='https://github.com/vnylbscr/Space-Game'>
                                <li>Java JPanel ile 2d uzay oyunu</li>
                                </a>
                            </ul>
                        </div>
                        <div className='footerIcons'> 
                            <a href="https://github.com/vnylbscr">
                            <ion-icon name="logo-github" size="large" ></ion-icon>
                            </a> 
                            <a href="https://instagram.com/gencmert_">
                            <ion-icon name="logo-instagram" size="large" ></ion-icon>
                            </a>
                            <a href="https://twitter.com/accurcy">
                            <ion-icon name="logo-twitter" size="large" ></ion-icon>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
