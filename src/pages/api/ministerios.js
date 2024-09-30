export default function Ministerios(req, res) {
    let ministres = [
        {
            id: 1,
            img: 'npa/454400318_1045514690498285_2227685657091370702_n_tvn9u9',
            content: 'Jóvenes dispuestos a amar y servir a nuestro creador ❤ #jniferreñafe #jninamovible',
            descripcion: '',
            title: 'Ministerio NPA - Ferreñafe',
            multimedia: {
                videos: [],
            },
        },
        {
            id: 2,
            img: 'torre-fuerte/459324805_1069036644812756_327581991179728132_n_hn0yxq',
            content: 'Torre fuerte es el nombre de Jehová; A él correrá el justo, y será levantado. \n Proverbios 18:10-17 RVR1960',
            descripcion: '',
            title: 'Ministerio Torre Fuerte',
            multimedia: {
                videos: [
                    {
                        url: 'https://www.youtube.com/embed/Cm94gAMZows',
                        descripcion: 'TODO VA A ESTAR BIEN - (BE ALRIGHT) (cover- Alejandro y Juan Jesus)',
                    },
                    {
                        url: 'https://www.youtube.com/embed/pPOHWnYjI74',
                        descripcion: 'Way maker-Asi eres tu - cover - Alejandro Ramirez Diaz',
                    },
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F1958227511175397%2F&show_text=false&width=560&t=0',
                        descripcion: 'Culto 19/02/2023',
                    },
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F930514964615651%2F&show_text=false&width=560&t=0',
                        descripcion: 'Culto 19/02/2023',
                    },
                ],
                images: [
                    {
                        title: 'Tiempos de alabanza',
                        photos: [
                            {
                                url: 'torre-fuerte/459324805_1069036644812756_327581991179728132_n_hn0yxq',
                            },
                            {
                                url: 'torre-fuerte/459526442_1069034758146278_9030910534690428941_n_ckvwtt',
                            },
                        ],
                    },
                ],
            },
        },
        {
            id: 3,
            img: 'somos-uno/457805441_1061857532197334_1386307296656304935_n_jmweqd',
            content: '',
            descripcion: '',
            title: 'Ministerio Somos Uno',
            multimedia: {
                videos: [
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F891314905417528%2F&show_text=false&width=560&t=0',
                        descripcion: 'Culto 26/02/2023',
                    },
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F1138215750233459%2F&show_text=false&width=560&t=0',
                        descripcion: 'Culto 06/11/2022',
                    },
                ],
                images: [
                    {
                        title: 'Tiempos de alabanzas',
                        photos: [
                            {
                                url: 'somos-uno/457066660_1057278805988540_8427111153565326172_n_ueooww',
                            },
                            {
                                url: 'somos-uno/457805441_1061857532197334_1386307296656304935_n_jmweqd',
                            },
                        ],
                    },
                ],
            },
        },
        {
            id: 4,
            img: 'jni-ferreñafe/454313748_1044973810552373_8829770076688554815_n_tu2ozw',
            content: 'Permanentes ❤',
            descripcion: 'Misión: “Guiar a los jóvenes a amar como Cristo” \n Visión: “Ser una juventud dinámica al estilo de Cristo” \nObjetivo Estratégico: “Desarrollar en los jóvenes un liderazgo integral, cumpliendo la Gran Comisión, desarrollando los ministerios juveniles según los dones espirituales y viviendo los valores de una vida de santidad para ser como Cristo”',
            title: 'JNI Ferreñafe ',
            multimedia: {
                videos: [
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F488336199937149%2F&show_text=false&width=267&t=0',
                        description: 'Campamento part 1',
                    },
                ],
                // images: [
                //     {
                //         title: 'Noche de Talentos',
                //         photos: [
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/298741282_3190738781190647_639296984060722465_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG19Xs4pcT7tFE1LKMLfqS1mbv7Obq_EgeZu_s5ur8SB-2d3iO0_40rdDyHQAj9NKwlG9Wf0QnyiPHl8NmFu1VX&_nc_ohc=_KJtUnLh718AX89xvUg&_nc_ht=scontent-lim1-1.xx&oh=00_AfBRi2eBzcejXzjhKjuz2mLEC9yiP98Nzxt_bHi1XAXKbg&oe=6401895E',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299419523_3190739094523949_5227882635637778315_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHqCOl2S0boT-99IzCMWB_zTS0vAp9dIhFNLS8Cn10iETjItQNvdCbBeWCWx9PMso10E9gJMuZhB75OP0fXZ2Hn&_nc_ohc=cTlV9VzUV3oAX8opOT8&_nc_ht=scontent-lim1-1.xx&oh=00_AfBOq3wXi4j78gipsinnjTl3gFt7i3TOL9DfzhKXAqx4nw&oe=6401A366',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/298809103_3190738597857332_8471787923393601422_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEk5qf3cf_yPWlUN2eqbpCbvK5TJhstMIm8rlMmGy0wif8ovDnOP65rvt75Hp8a5vGdXiQnPw4_vaEv9yvGv_Gs&_nc_ohc=4FaUoT0m7yYAX9fqfey&_nc_ht=scontent-lim1-1.xx&oh=00_AfDnrXJ7lcNopEKi86AGlJS9q7JdsXNuN-Ql4MNn72e2OA&oe=64025A9F',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299968985_3190738994523959_8946154912086025098_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFl7L0GmXuxlGIyO5VBruwI8QIT_uSBk4fxAhP-5IGTh7e_7gM2up6NJ1qtiKl7dXcSWB6cVBuvbsZaC4ki14Yf&_nc_ohc=LQXtXDLi1JYAX-w1fkw&_nc_ht=scontent-lim1-1.xx&oh=00_AfAjuSWdEaKjQ-oWu44Q5dQ1XeriwAFo2MNbsnE7oOiuRg&oe=6402FD84',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299299799_3190740037857188_4761296423289468787_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEIS8bGdnIlkPMBu3Sz06RAhA2vgseQS_2EDa-Cx5BL_XH-ps_ivNLtugejdLU5EixyrJ-nviVbVfpnaxhi6dXw&_nc_ohc=QP8392XgRPQAX9v5CDV&_nc_ht=scontent-lim1-1.xx&oh=00_AfA9Z5tcsELTy39dS7_LWymGchiPgQWYMbdxzeyR5hzl3Q&oe=64032694',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299034443_3190738671190658_3974366341219042254_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGrZ3shwQHWJJ-m00D_YN7R3ZOCnFyDeA_dk4KcXIN4DyNyOsZ0-32UUxIAtM8NpT7vRusfLdA8pz_17S908eqI&_nc_ohc=j6wLQDDocXkAX8HuXX4&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfAApGkSg1naZ_VInLcpHBb57U6aG7QqEQIxc7ONWsV97g&oe=6401EEE0',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299279260_3190738871190638_5856621345915997151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEV_AK4a6wamykrZnDYoz3205ydGNgc8B7TnJ0Y2BzwHmWSj7knomsgOpEj13kVrO4abwah75TDXJd3Pi3Tmqgt&_nc_ohc=iFGC9kK4ks0AX8ND-8s&_nc_ht=scontent-lim1-1.xx&oh=00_AfAaWlkcW8lFjZ8m40NP1Io2d2PLNdMU8JY4OgZHSPrPtQ&oe=64016454',
                //             },
                //             {
                //                 url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299549906_613936203656138_6653104993430698121_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFddq_avvw8mlqVU0hK26ew5F8vTKOAR8HkXy9Mo4BHweq-G4TcHHnWCEQeVXY_Z9cPKCNO6aMh2Hw-bcT5m9Mb&_nc_ohc=SBqCh5pTTYgAX8afkBE&_nc_ht=scontent-lim1-1.xx&oh=00_AfBMqHG5ayOulgSDgX1UApUBGSKy6R5MaXH_GP6TewA8Rw&oe=64018CF8',
                //             },
                //         ],
                //     },
                // ],
            },
        },
        {
            id: 5,
            img: 'sembrando futuro/2_zekq7y',
            content: '',
            descripcion: '',
            title: 'Ministerio Sembrando Futuro',
            multimedia: {
                videos: [
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F1018112426260627%2F&show_text=false&width=560&t=0',
                        descripcion: 'Especial Musical',
                    },
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F593196006021685%2F&show_text=false&width=560&t=0',
                        descripcion: 'Coro de iglesia ',
                    },
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F5923042204415504%2F&show_text=false&width=560&t=0',
                        descripcion: 'Llamado',
                    },
                    {
                        url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F219700877102149%2F&show_text=false&width=560&t=0',
                        descripcion: '',
                    },
                ],
                images: [
                    {
                        title: 'Ceremonia de graduación - Llamados a servir',
                        photos: [
                            {
                                url: 'sembrando futuro/8_gz14ky',
                            },
                            {
                                url: 'sembrando futuro/4_r3mo7o',
                            },
                            {
                                url: 'sembrando futuro/1_y72yvr',
                            },
                            {
                                url: 'sembrando futuro/11_bmryni',
                            },
                            {
                                url: 'sembrando futuro/10_ezhm0j',
                            },
                            {
                                url: 'sembrando futuro/3_rplr3e',
                            },
                            {
                                url: 'sembrando futuro/9_h6teir',
                            },
                            {
                                url: 'sembrando futuro/7_p0b4us',
                            },
                            {
                                url: 'sembrando futuro/6_yyt7sp',
                            },
                            {
                                url: 'sembrando futuro/5_sgfawf',
                            },
                            {
                                url: 'sembrando futuro/2_zekq7y',
                            },
                        ],
                    },
                    // {
                    //     title: 'Campamento',
                    //     photos: [
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312047853_668728444843580_5908902439243183612_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFtu0Y-S5sxK8Vy2U8girBSIrn8bFHsj_siufxsUeyP-4Sa57nCGqqkSbd47HIoXwEYAZMYRtErYkruT_vW0fu9&_nc_ohc=faUXUPC0kQ8AX-R2Hzt&_nc_ht=scontent-lim1-1.xx&oh=00_AfBNaHk_ayRCh3PFaKF5k_TMycD8pxb8J219-W0zUbJWiA&oe=64026F3F',
                    //         },
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312596073_668728478176910_2787097563533566617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFibM0QEyB69JTHsN3dpnC-d5l6N4fhX793mXo3h-Ffvyk-bdx_Hxizi8G958soCBXO1IKnnbsvF5IO_Vq6ELDs&_nc_ohc=RA9PPMkKYCUAX9oOpAv&_nc_ht=scontent-lim1-1.xx&oh=00_AfBfTNSRlUfFrMdDWVRL7g1hwmT7-MJw5dGU2UUrmPBu2g&oe=64022F14',
                    //         },
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/313072697_668728538176904_2638523810688282243_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFwg-wOYxsoiZpjZ5ZZogogYgunBdsuzoRiC6cF2y7OhE9O1g8sZ541cmf-vILmzwnpHAyBiTrcAwcsb48LR79D&_nc_ohc=yDD8Eie5758AX-Dcg_8&_nc_ht=scontent-lim1-1.xx&oh=00_AfAtcljVPP1Mq3PrUURZiJYWwaxknfKFIIjIfxO5RNZVog&oe=6402B829',
                    //         },
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312084521_668728574843567_1136263271703705270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFP5x9C2rhcOn7B31yFanG2Rkw6EI0OjwVGTDoQjQ6PBcXhkhRkraunMl6YwbccHG8ReErgOA1ugg2q_SEarrVa&_nc_ohc=sEeQNon9_2IAX-ksvUr&_nc_ht=scontent-lim1-1.xx&oh=00_AfBnFZEKon61VwtPlqYaYNhgHyTQA68PuY4pC-1tL4RllA&oe=6401A274',
                    //         },
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312213438_668728628176895_8983920545281963235_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeElwV7b0yQuCPbN0GKr1ZmQholybUk2geqGiXJtSTaB6oHzGhhz0PVzrrSrgwEoBfBXE8vAyYFLSRnVASFxnpsw&_nc_ohc=yxzKPvDY6icAX_W_FON&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfCo94EGbc3Yjls273-mabmbxccfIP1ltmx_QAC0TZRd_Q&oe=64024835',
                    //         },
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/311933486_668728644843560_2746828961993601343_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEjsm5rL5yBRf4osAnj0DXiGSWGUhNfCsMZJYZSE18Kw8GfUgof7AVNMYUEe0e4T82AznLPxE5kxl34soi06QnA&_nc_ohc=eC8hQMHdiYEAX-SHMcr&_nc_ht=scontent-lim1-1.xx&oh=00_AfAaDeZANNp79qiM2mN5cc_uQqV-M_EX65Idx-qLsadoPg&oe=64025119',
                    //         },
                    //         {
                    //             url: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312047853_668728444843580_5908902439243183612_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFtu0Y-S5sxK8Vy2U8girBSIrn8bFHsj_siufxsUeyP-4Sa57nCGqqkSbd47HIoXwEYAZMYRtErYkruT_vW0fu9&_nc_ohc=faUXUPC0kQ8AX-R2Hzt&_nc_ht=scontent-lim1-1.xx&oh=00_AfBNaHk_ayRCh3PFaKF5k_TMycD8pxb8J219-W0zUbJWiA&oe=64026F3F',
                    //         },
                    //         {},
                    //     ],
                    // },
                ],
            },
        },
    ]
    if (req.query.id) {
        ministres = ministres.filter((i) => {
            return i.id == req.query.id
        })
        return res.status(200).json({ ministres })
    }
    ministres = ministres.map((i) => {
        return {
            id: i.id,
            img: i.img,
            content: i.content,
            descripcion: i.descripcion,
            title: i.title,
        }
    })

    return res.status(200).json({ ministres })
}
