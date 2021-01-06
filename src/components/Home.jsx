import React from 'react'
import { Fade, Zoom } from 'react-reveal'

import styles from './Home.module.css'
import lighterRedTextBg from '../assets/images/lighter-red-text-bg.svg'
import man from '../assets/images/man.svg'
import woman from '../assets/images/woman.svg'
import yellowTextBg from '../assets/images/yellow-text-bg.svg'

const disableDrag = (e) => {
    e.preventDefault();
}

const Home = () => {
    return (
        <div className={styles.container}>
            <Fade left>
                <div className={styles.hire}>
                    <h1 className={styles.hireTitle} ><span>We're</span>Hiring</h1>
                </div>
            </Fade>
            <Fade right>
                <div className={styles.jobs}>
                    <h2 className={styles.jobsTitle} >Pramuniaga<br />& Kasir</h2>
                </div>
            </Fade>
            <Fade>
                <div className={styles.req}>
                    <div className={styles.quote}>
                        <p>
                            Kualifikasi
                        </p>
                    </div>
                    <div className={styles.reqBox}>
                        <ol>
                            <Zoom>
                                <li>Lulusan minimal SMK/SMA</li>
                                <li>Berpengalaman diutamakan dan fresh graduate boleh melamar</li>
                                <li>Dapat bekerjasama dalam tim</li>
                                <li>Brsedia bekerja shift</li>
                                <li>Jujur, pekerja keras dan bertanggungjawab</li>
                            </Zoom>
                        </ol>
                    </div>
                </div>
            </Fade>
            <Fade left>
                <div className={styles.sendToBox}>
                    <p>Kirim lamaran dengan mengisi form berikut</p>
                    <a target="_blank" rel="noreferrer" href="http://bit.ly/fineelektronik">http://bit.ly/fineelektronik</a>
                    <p>atau kirim lamaran langsung ke toko membawa lamaran lengkap, CV, FC Ijazah, dan FC KTP</p>
                </div>
            </Fade>
            <Fade left>
                <img onDragStart={disableDrag} src={lighterRedTextBg} alt="" id={styles.lighterRedTextBg} className={styles.bgImage} />
            </Fade>
            <Fade bottom delay={1500}>
                <img onDragStart={disableDrag} src={man} alt="" id={styles.man} className={styles.bgImage} />
            </Fade>
            <Fade bottom delay={1500}>
                <img onDragStart={disableDrag} src={woman} alt="" id={styles.woman} className={styles.bgImage} />
            </Fade>
            <Fade right>
                <img onDragStart={disableDrag} src={yellowTextBg} alt="" id={styles.yellowTextBg} className={styles.bgImage} />
            </Fade>
        </div>
    )
}

export default Home
