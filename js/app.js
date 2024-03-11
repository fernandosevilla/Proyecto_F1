function mostrarTabla() {
    let opcionSeleccionada = document.getElementById("año").value;
    let tabla = "1";

    switch (opcionSeleccionada) {
        case "2024":
            tabla = `
                <h3>2024 Resumen de Temporada (ACTUALIZADO HASTA EL 09/03/2024)</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">87</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">49</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">McLaren</td>
                            <td class="pts">28</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">26</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Aston Martin</td>
                            <td class="pts">13</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Haas</td>
                            <td class="pts">1</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Williams</td>
                            <td class="pts">0</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Stake</td>
                            <td class="pts">0</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">RB</td>
                            <td class="pts">0</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Alpine</td>
                            <td class="pts">0</td>
                        </tr>
                    </tbody>
                </table>
                <div class="centrar-iframe">
                    <img src="../img/pilotos/fernando-alonso-mewing.gif" id="mewing" alt="alonso" /><br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OJ56MAGFPGM?si=7dw3-i5HRWdn1XYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.8312994515536!2d39.10195297603665!3d21.63149648017293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dbb6d26f1aa3%3A0xe5ae57c9164742a6!2sJeddah%20Corniche%20Circuit!5e0!3m2!1ses!2ses!4v1710157089144!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>`;
            break;
        case "2023":
            tabla = `
                <h3>2023 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">860</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">409</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">406</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">McLaren</td>
                            <td class="pts">302</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Aston Martin</td>
                            <td class="pts">280</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Alpine</td>
                            <td class="pts">120</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Williams</td>
                            <td class="pts">28</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">AlphaTauri</td>
                            <td class="pts">25</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">Alfa Romeo</td>
                            <td class="pts">16</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Haas</td>
                            <td class="pts">12</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2022":
            tabla = ` 
                <h3>2022 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">759</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">553</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">515</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">Alpine</td>
                            <td class="pts">173</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">McLaren</td>
                            <td class="pts">159</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Alfa Romeo</td>
                            <td class="pts">55</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Aston Martin</td>
                            <td class="pts">55</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Haas</td>
                            <td class="pts">37</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">AlphaTauri</td>
                            <td class="pts">35</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Williams</td>
                            <td class="pts">8</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2021":
            tabla = ` 
                <h3>2021 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">613</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">586</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">323</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">McLaren</td>
                            <td class="pts">275</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Alpine</td>
                            <td class="pts">155</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">AlphaTauri</td>
                            <td class="pts">142</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Aston Martin</td>
                            <td class="pts">77</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Williams</td>
                            <td class="pts">23</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">Alfa Romeo</td>
                            <td class="pts">13</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Haas</td>
                            <td class="pts">0</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2020":
            tabla = ` 
                <h3>2020 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">573</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">315</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Racing Point</td>
                            <td class="pts">207</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">McLaren</td>
                            <td class="pts">202</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Renault</td>
                            <td class="pts">181</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">137</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Alpha Tauri</td>
                            <td class="pts">107</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Alfa Romero</td>
                            <td class="pts">8</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">Haas</td>
                            <td class="pts">3</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Williams</td>
                            <td class="pts">0</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2019":
            tabla = ` 
                <h3>2019 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">739</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">504</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">417</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">McLaren</td>
                            <td class="pts">145</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Renault</td>
                            <td class="pts">91</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Toro Rosso</td>
                            <td class="pts">85</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Racing Point</td>
                            <td class="pts">73</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Alfa Romeo</td>
                            <td class="pts">57</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">Haas</td>
                            <td class="pts">28</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Williams</td>
                            <td class="pts">1</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2018":
            tabla = ` 
                <h3>2018 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">655</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">571</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">419</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">Renault</td>
                            <td class="pts">122</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Force India</td>
                            <td class="pts">111</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Haas</td>
                            <td class="pts">93</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">McLaren</td>
                            <td class="pts">62</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Sauber</td>
                            <td class="pts">48</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">Toro Rosso</td>
                            <td class="pts">33</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Williams</td>
                            <td class="pts">7</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2017":
            tabla = ` 
                <h3>2017 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">668</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">522</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">368</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">Force India</td>
                            <td class="pts">187</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Williams</td>
                            <td class="pts">83</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Renault</td>
                            <td class="pts">57</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Toro Rosso</td>
                            <td class="pts">53</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Haas</td>
                            <td class="pts">47</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">McLaren</td>
                            <td class="pts">30</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Sauber</td>
                            <td class="pts">5</td>
                        </tr>
                    </tbody>
                </table>`;
            break;
        case "2016":
            tabla = ` 
                <h3>2016 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">765</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">468</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">398</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">Force India</td>
                            <td class="pts">173</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Williams</td>
                            <td class="pts">138</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">McLaren</td>
                            <td class="pts">76</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Toro Rosso</td>
                            <td class="pts">63</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Haas</td>
                            <td class="pts">29</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">Renault</td>
                            <td class="pts">8</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Sauber</td>
                            <td class="pts">2</td>
                        </tr>
                        <tr>
                            <td class="pos">11</td>
                            <td class="team">Manor Marussia</td>
                            <td class="pts">1</td>
                        </tr>
                    </tbody>
                </table>`;
            break;                
        case "2015":
            tabla = ` 
                <h3>2015 Resumen de Temporada</h3>
                <table>
                    <thead>
                        <tr>
                            <th class="pos">POS</th>
                            <th class="team">ESCUDERÍA</th>
                            <th class="pts">PTS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="pos">1</td>
                            <td class="team">Mercedes</td>
                            <td class="pts">703</td>
                        </tr>
                        <tr>
                            <td class="pos">2</td>
                            <td class="team">Ferrari</td>
                            <td class="pts">428</td>
                        </tr>
                        <tr>
                            <td class="pos">3</td>
                            <td class="team">Williams</td>
                            <td class="pts">257</td>
                        </tr>
                        <tr>
                            <td class="pos">4</td>
                            <td class="team">Red Bull</td>
                            <td class="pts">187</td>
                        </tr>
                        <tr>
                            <td class="pos">5</td>
                            <td class="team">Force India</td>
                            <td class="pts">136</td>
                        </tr>
                        <tr>
                            <td class="pos">6</td>
                            <td class="team">Lotus F1</td>
                            <td class="pts">78</td>
                        </tr>
                        <tr>
                            <td class="pos">7</td>
                            <td class="team">Toro Rosso</td>
                            <td class="pts">67</td>
                        </tr>
                        <tr>
                            <td class="pos">8</td>
                            <td class="team">Sauber</td>
                            <td class="pts">36</td>
                        </tr>
                        <tr>
                            <td class="pos">9</td>
                            <td class="team">McLaren</td>
                            <td class="pts">27</td>
                        </tr>
                        <tr>
                            <td class="pos">10</td>
                            <td class="team">Manor Marussia</td>
                            <td class="pts">0</td>
                        </tr>
                    </tbody>
                </table>`;
            break;                    
        default:
            tabla = "Hola";
    }

    document.getElementById("tabla-container").innerHTML = tabla;
}