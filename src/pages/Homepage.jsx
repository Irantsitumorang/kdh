import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Homepage.css"

const Homepage = () => {
  return (
      <div className="homepage">
        <div className='hp1'>
            <div className="topik">
            <h1>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h1>
            <p>mau nanya akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di hack karena kasus terjadi setiap terkoneksi ke internet</p>
            </div>
            <div className="komen">
                <h2>Komentar</h2>
                <div className="komen1">
                    <div className="komen1a">
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div className="komen1b">
                        <div className="komen1b1">
                            <b>Neal Topham</b>
                            <h5>08 February 2017 07.30</h5>
                            <span>Mungkin ada fenomena paranormal yang tidak bisa di jelaskan. Lebi baik nyala mati daripada tidak nyala sama sekali</span>
                            <h3 className='poin'>point
                                <i class="fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                                </h3>
                        </div>
                        <div className="komen1b2">
                            <div className="komen1b2a">
                                <img src="https://source.unsplash.com/random" alt="" style={{width: "5%"}}/>
                            </div>
                            <div className="komen1b2b">
                                <b>Dyan Shankin</b>
                                <h5>08 February 2017 07:33</h5>
                                <span>Confirm, itu kemnungkinan aktifitas paranormal</span>
                                <h3 className='poin'>point
                                <i class="fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="komen1">
                    <div className="komen1a">
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div className="komen1b">
                        <div className="komen1b1">
                            <b>Jacquelyne Garity</b>
                            <h5>08 February 2017 07.32</h5>
                            <span>Saya mengalami hal serupa. Laptop yang digunakan Toshiba L645. Tolong infonya</span>
                            <h3 className='poin'>point
                                <i class="fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                                </h3>
                        </div>
                        <div className="komen1b2">
                            <div className="komen1b2a">
                                <img src="https://source.unsplash.com/random" alt="" style={{width: "5%"}}/>
                            </div>
                            <div className="komen1b2b">
                                <b>Shella Tamashiro</b>
                                <h5>09 February 2017 07:33</h5>
                                <span>Ada kemungkina  ini masalah virus. Coba dilakukan virus scan menggunakan software anti virus.</span>
                                <h3 className='poin'>point
                                <i class="fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                                </h3>
                            </div>
                        </div>
                        <div className="komen1b2">
                            <div className="komen1b2a">
                                <img src="https://source.unsplash.com/random" alt="" style={{width: "5%"}}/>
                            </div>
                            <div className="komen1b2b">
                                <b>Marcelino Stangle</b>
                                <h5>08 February 2017 07:37</h5>
                                <span>Setuju</span>
                                <h3 className='poin'>point
                                <i class="fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="komen1">
                    <div className="komen1a">
                        <img src="https://source.unsplash.com/random" alt="" />
                    </div>
                    <div className="komen1b">
                        <div className="komen1b1">
                            <b>Lawanda Schey</b>
                            <h5>08 February 2017 07.32</h5>
                            <span>Apakah ada solusi lain? Sudah dicoba untuk scan virus tapi kasus ini tetap ada</span>
                            <h3 className='poin'>point
                                <i class="fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                                </h3>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="t-komen">
            
                    <h2>Tambah Komentar</h2>
                    <p>
                        <input type="text" name="name" placeholder="Name" />
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Email" />
                    </p>
                    <p>
                        <textarea name="subject" id="" cols="40" rows="5" placeholder='Komentar Anda' style={{marginLeft: "14%"}}></textarea>
                    </p>
                    <p>
                        <input type="submit" name="submit" value="Reset" />
                        <input type="submit" name="submit" value="Submit" />
                    </p>
            </div>
        </div> <br />


        <div className="hp2">
            <ol>
                <li><a href="/">Bersihkan laptop dari butiran debu</a></li>
                <li><Link to="/">Cara akses website menggunakan koneksi open VPN</Link></li>
                <li><Link to="/">Batas aman overlock PC rakitan</Link></li>
                <li><Link to="/">Cara mengetahui akun facebook di hack melalui aplikasi</Link></li>
                <li><Link to="/">Tutorial : langkah-langkah mencegah website untuk track user</Link></li>
            </ol>
        </div>
    </div>
  )
}

export default Homepage