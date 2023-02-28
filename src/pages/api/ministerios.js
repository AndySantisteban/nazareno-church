export default function Ministerios(req, res) {
  let ministres = [
    {
      id: 1,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/273919172_498938695155890_2838185720628832009_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=V4j0CCkTcxoAX90ZRRM&_nc_ht=scontent-lim1-1.xx&oh=00_AfCI-iZ9PBEkVdpDAc6F-pYa2B34347hM6fZyp6SWFUjpQ&oe=63FF1448",
      content:
        "Jóvenes dispuestos a amar y servir a nuestro creador ❤ #jniferreñafe #jninamovible",
      descripcion: "",
      title: "Ministerio NPA - Ferreñafe",
      multimedia: {
        videos: [],
      },
    },
    {
      id: 2,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332071752_935157594326698_8335509709515116299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFMPknota72Zjor5qGWoBuRKtrbmaImrg4q2tuZoiauDjwee0bcBYeCeObW1EGzbSdCYGYnjjTtiUZGfzTVS0Q6&_nc_ohc=W1EibJVj-qMAX-dD3Sz&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfAIACkGg3LFqYYdFNM_JlQdZA5t3dpDPhCGb6kvplgueQ&oe=63FF146B",
      content:
        "Torre fuerte es el nombre de Jehová; A él correrá el justo, y será levantado. \n Proverbios 18:10-17 RVR1960",
      descripcion: "",
      title: "Ministerio Torre Fuerte",
      multimedia: {
        videos: [
          {
            url: "https://www.youtube.com/embed/Cm94gAMZows",
            descripcion:
              "TODO VA A ESTAR BIEN - (BE ALRIGHT) (cover- Alejandro y Juan Jesus)",
          },
          {
            url: "https://www.youtube.com/embed/pPOHWnYjI74",
            descripcion:
              "Way maker-Asi eres tu - cover - Alejandro Ramirez Diaz",
          },
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F1958227511175397%2F&show_text=false&width=560&t=0",
            descripcion: "Culto 19/02/2023",
          },
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F930514964615651%2F&show_text=false&width=560&t=0",
            descripcion: "Culto 19/02/2023",
          },
        ],
      },
    },
    {
      id: 3,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299656041_3190738724523986_3755858983783044774_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFqnG8IdKXZJlo8Wj4aoLB1U-c24e_5pYxT5zbh7_mljJNaQbD8bP66wX7SxDKe9lMjJCW_TRvlRrWlphgh75CC&_nc_ohc=5oejXTsE7uAAX_xS4yF&_nc_ht=scontent-lim1-1.xx&oh=00_AfDVjWvykocN3vy6FrP9OosgBgCuIP2IQ2ZHDWysSQ_Azw&oe=63FF4DD5",
      content: "",
      descripcion: "",
      title: "Ministerio Somos Uno",
      multimedia: {
        videos: [
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F891314905417528%2F&show_text=false&width=560&t=0",
            descripcion: "Culto 26/02/2023",
          },
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F1138215750233459%2F&show_text=false&width=560&t=0",
            descripcion: "Culto 06/11/2022",
          },
        ],
        images: [
          {
            title: "Ceremonia de graduación",
            photos: [
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332872066_772914987595280_5317015994031946155_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGpcUDWzXKAhIL8aoXEwotcR8Ue9uq9cnFHxR726r1ycQNtSFLE9-4QfUTBBiMwtoV2XlcnpdJMAcwotJLYs4vH&_nc_ohc=4eaqqAoSI8kAX_pghyK&_nc_ht=scontent-lim1-1.xx&oh=00_AfAMrc3BBVZ2nTNefvCv1xpuX8ew-PtKVVmFxCs4cOpviA&oe=64025103",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332716200_515343877203812_7406403626729460899_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHnUI-BFpHvSXHfIXmH_EIQLDP5iqLqnKssM_mKouqcq6PhDoObZ0mhNKIB0AWx1yS9J4SJs8tLeSXkUWXZ6cpf&_nc_ohc=uLoGyhuVq_UAX9lwgy2&_nc_ht=scontent-lim1-1.xx&oh=00_AfC_LxtmbuvynB6QlxnfP9F40hAcQlHIdAZVGZhxn2DpeQ&oe=6402FFAF",
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299279260_3190738871190638_5856621345915997151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEV_AK4a6wamykrZnDYoz3205ydGNgc8B7TnJ0Y2BzwHmWSj7knomsgOpEj13kVrO4abwah75TDXJd3Pi3Tmqgt&_nc_ohc=nVUZEsFeqogAX9abUtp&_nc_ht=scontent-lim1-1.xx&oh=00_AfBhS7TCsEEtNhInRHKj5PVhVfrkcmU8qT-6PcRd4nDmLQ&oe=64016454",
      content: "Permanentes ❤",
      descripcion:
        "Misión: “Guiar a los jóvenes a amar como Cristo” \n Visión: “Ser una juventud dinámica al estilo de Cristo” \nObjetivo Estratégico: “Desarrollar en los jóvenes un liderazgo integral, cumpliendo la Gran Comisión, desarrollando los ministerios juveniles según los dones espirituales y viviendo los valores de una vida de santidad para ser como Cristo”",
      title: "JNI Ferreñafe ",
      multimedia: {
        videos: [
          {
            url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F488336199937149%2F&show_text=false&width=267&t=0",
            description: "Campamento part 1",
          },
        ],
        images: [
          {
            title: "Noche de Talentos",
            photos: [
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/298741282_3190738781190647_639296984060722465_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG19Xs4pcT7tFE1LKMLfqS1mbv7Obq_EgeZu_s5ur8SB-2d3iO0_40rdDyHQAj9NKwlG9Wf0QnyiPHl8NmFu1VX&_nc_ohc=_KJtUnLh718AX89xvUg&_nc_ht=scontent-lim1-1.xx&oh=00_AfBRi2eBzcejXzjhKjuz2mLEC9yiP98Nzxt_bHi1XAXKbg&oe=6401895E",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299419523_3190739094523949_5227882635637778315_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHqCOl2S0boT-99IzCMWB_zTS0vAp9dIhFNLS8Cn10iETjItQNvdCbBeWCWx9PMso10E9gJMuZhB75OP0fXZ2Hn&_nc_ohc=cTlV9VzUV3oAX8opOT8&_nc_ht=scontent-lim1-1.xx&oh=00_AfBOq3wXi4j78gipsinnjTl3gFt7i3TOL9DfzhKXAqx4nw&oe=6401A366",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/298809103_3190738597857332_8471787923393601422_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEk5qf3cf_yPWlUN2eqbpCbvK5TJhstMIm8rlMmGy0wif8ovDnOP65rvt75Hp8a5vGdXiQnPw4_vaEv9yvGv_Gs&_nc_ohc=4FaUoT0m7yYAX9fqfey&_nc_ht=scontent-lim1-1.xx&oh=00_AfDnrXJ7lcNopEKi86AGlJS9q7JdsXNuN-Ql4MNn72e2OA&oe=64025A9F",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299968985_3190738994523959_8946154912086025098_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFl7L0GmXuxlGIyO5VBruwI8QIT_uSBk4fxAhP-5IGTh7e_7gM2up6NJ1qtiKl7dXcSWB6cVBuvbsZaC4ki14Yf&_nc_ohc=LQXtXDLi1JYAX-w1fkw&_nc_ht=scontent-lim1-1.xx&oh=00_AfAjuSWdEaKjQ-oWu44Q5dQ1XeriwAFo2MNbsnE7oOiuRg&oe=6402FD84",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299299799_3190740037857188_4761296423289468787_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEIS8bGdnIlkPMBu3Sz06RAhA2vgseQS_2EDa-Cx5BL_XH-ps_ivNLtugejdLU5EixyrJ-nviVbVfpnaxhi6dXw&_nc_ohc=QP8392XgRPQAX9v5CDV&_nc_ht=scontent-lim1-1.xx&oh=00_AfA9Z5tcsELTy39dS7_LWymGchiPgQWYMbdxzeyR5hzl3Q&oe=64032694",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299034443_3190738671190658_3974366341219042254_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGrZ3shwQHWJJ-m00D_YN7R3ZOCnFyDeA_dk4KcXIN4DyNyOsZ0-32UUxIAtM8NpT7vRusfLdA8pz_17S908eqI&_nc_ohc=j6wLQDDocXkAX8HuXX4&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfAApGkSg1naZ_VInLcpHBb57U6aG7QqEQIxc7ONWsV97g&oe=6401EEE0",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299279260_3190738871190638_5856621345915997151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEV_AK4a6wamykrZnDYoz3205ydGNgc8B7TnJ0Y2BzwHmWSj7knomsgOpEj13kVrO4abwah75TDXJd3Pi3Tmqgt&_nc_ohc=iFGC9kK4ks0AX8ND-8s&_nc_ht=scontent-lim1-1.xx&oh=00_AfAaWlkcW8lFjZ8m40NP1Io2d2PLNdMU8JY4OgZHSPrPtQ&oe=64016454",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299549906_613936203656138_6653104993430698121_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFddq_avvw8mlqVU0hK26ew5F8vTKOAR8HkXy9Mo4BHweq-G4TcHHnWCEQeVXY_Z9cPKCNO6aMh2Hw-bcT5m9Mb&_nc_ohc=SBqCh5pTTYgAX8afkBE&_nc_ht=scontent-lim1-1.xx&oh=00_AfBMqHG5ayOulgSDgX1UApUBGSKy6R5MaXH_GP6TewA8Rw&oe=64018CF8",
              },
            ],
          },
        ],
      },
    },
    {
      id: 5,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332319985_1567176190460688_7210210718170988070_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFPCpjDvyNQ-s9gpkDIBVB6r3B_WKLrcuyvcH9Youty7J1_04272Q3lIn2KO1Maoimu6ryuxfQ6ROScp8KRWf_r&_nc_ohc=vgWJsNS4Y1AAX_5qu5B&_nc_ht=scontent-lim1-1.xx&oh=00_AfDgHAxnN0PGYSGRv5jnU9bXL7dr4oEDL3cJrZ_Jyczn5w&oe=64004ACF",
      content: "",
      descripcion: "",
      title: "Ministerio Sembrando Futuro",
      multimedia: {
        videos: [
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F1018112426260627%2F&show_text=false&width=560&t=0",
            descripcion: "Especial Musical",
          },
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F593196006021685%2F&show_text=false&width=560&t=0",
            descripcion: "Coro de iglesia ",
          },
          {
            url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Figlesia.delnazareno.79025%2Fvideos%2F5923042204415504%2F&show_text=false&width=560&t=0",
            descripcion: "Llamado",
          },
        ],
        images: [
          {
            title: "Ceremonia de graduación - Llamados a servir",
            photos: [
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/333274790_582098873829726_7678767766437197812_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeG0lq4Cc6jkOQ7WbV3pFU7QGCmtHznbhU0YKa0fOduFTUFk5Krd5mluX8vTzbFkW3_JVkNO1iM_s_vqvTnz16Iv&_nc_ohc=yHeheOQCvZkAX_kdaBB&_nc_ht=scontent-lim1-1.xx&oh=00_AfCxG2T19ER7xHuPLDh2WvhfBolMFqB72NZN1FQ4fRpDPA&oe=64023EAD",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332319985_1567176190460688_7210210718170988070_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFPCpjDvyNQ-s9gpkDIBVB6r3B_WKLrcuyvcH9Youty7J1_04272Q3lIn2KO1Maoimu6ryuxfQ6ROScp8KRWf_r&_nc_ohc=AwEerMisp4UAX8nzst3&_nc_ht=scontent-lim1-1.xx&oh=00_AfDRU70Hv0FPhuGVmFa3c_VyIJ2tGKxCcpaKviyPU6VmEg&oe=6402450F",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332326703_596223772548851_1823774255673690570_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFVyZGESk3Dgq96F3dyYk2CPHTJCN8iFeI8dMkI3yIV4rWe7o8qUSTDoAaFcrlBf3Dwf55Xj1RuHXSN3FyILtOh&_nc_ohc=qH5sm_77F_YAX9e7v1y&_nc_ht=scontent-lim1-1.xx&oh=00_AfABmyp5ZFaucORPJnCacEEGJ7xlJUoKv3b04mwIY4Sr2w&oe=6401AE3E",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332377969_540333004607131_8429838157986449935_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEbLQRGfRj5ZsQxL_QdVh6jHoIekr1yt38egh6SvXK3f7UOjdmy57Gb5ohf-NiObC1ROf6yy6i_3u8tHK5KHz-s&_nc_ohc=3yNm9ZpioMIAX91XLsP&_nc_ht=scontent-lim1-1.xx&oh=00_AfCneN_bYP7-KqXtCW_dvFc7NNRR8EUTYX3S1JGTa3CK2w&oe=6402536D",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/333041496_1382288812572682_7744022554354778177_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE7z6-pZd39KOrYCSFDDca7MVqlasflE2ExWqVqx-UTYd4He2iHt-Eje-ANPwQc3penNZuvIKBCM91PpZNM0qF1&_nc_ohc=1umU8ueDoh4AX9krvo9&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfCfd-yYkIl0YviG75fI_PbJ9py1eBxPYMD_V94oynm_MQ&oe=640288EB",
              },
            ],
          },
          {
            title: "Campamento",
            photos: [
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312047853_668728444843580_5908902439243183612_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFtu0Y-S5sxK8Vy2U8girBSIrn8bFHsj_siufxsUeyP-4Sa57nCGqqkSbd47HIoXwEYAZMYRtErYkruT_vW0fu9&_nc_ohc=faUXUPC0kQ8AX-R2Hzt&_nc_ht=scontent-lim1-1.xx&oh=00_AfBNaHk_ayRCh3PFaKF5k_TMycD8pxb8J219-W0zUbJWiA&oe=64026F3F",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312596073_668728478176910_2787097563533566617_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFibM0QEyB69JTHsN3dpnC-d5l6N4fhX793mXo3h-Ffvyk-bdx_Hxizi8G958soCBXO1IKnnbsvF5IO_Vq6ELDs&_nc_ohc=RA9PPMkKYCUAX9oOpAv&_nc_ht=scontent-lim1-1.xx&oh=00_AfBfTNSRlUfFrMdDWVRL7g1hwmT7-MJw5dGU2UUrmPBu2g&oe=64022F14",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/313072697_668728538176904_2638523810688282243_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFwg-wOYxsoiZpjZ5ZZogogYgunBdsuzoRiC6cF2y7OhE9O1g8sZ541cmf-vILmzwnpHAyBiTrcAwcsb48LR79D&_nc_ohc=yDD8Eie5758AX-Dcg_8&_nc_ht=scontent-lim1-1.xx&oh=00_AfAtcljVPP1Mq3PrUURZiJYWwaxknfKFIIjIfxO5RNZVog&oe=6402B829",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312084521_668728574843567_1136263271703705270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFP5x9C2rhcOn7B31yFanG2Rkw6EI0OjwVGTDoQjQ6PBcXhkhRkraunMl6YwbccHG8ReErgOA1ugg2q_SEarrVa&_nc_ohc=sEeQNon9_2IAX-ksvUr&_nc_ht=scontent-lim1-1.xx&oh=00_AfBnFZEKon61VwtPlqYaYNhgHyTQA68PuY4pC-1tL4RllA&oe=6401A274",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312213438_668728628176895_8983920545281963235_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeElwV7b0yQuCPbN0GKr1ZmQholybUk2geqGiXJtSTaB6oHzGhhz0PVzrrSrgwEoBfBXE8vAyYFLSRnVASFxnpsw&_nc_ohc=yxzKPvDY6icAX_W_FON&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfCo94EGbc3Yjls273-mabmbxccfIP1ltmx_QAC0TZRd_Q&oe=64024835",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/311933486_668728644843560_2746828961993601343_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEjsm5rL5yBRf4osAnj0DXiGSWGUhNfCsMZJYZSE18Kw8GfUgof7AVNMYUEe0e4T82AznLPxE5kxl34soi06QnA&_nc_ohc=eC8hQMHdiYEAX-SHMcr&_nc_ht=scontent-lim1-1.xx&oh=00_AfAaDeZANNp79qiM2mN5cc_uQqV-M_EX65Idx-qLsadoPg&oe=64025119",
              },
              {
                url: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/312047853_668728444843580_5908902439243183612_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFtu0Y-S5sxK8Vy2U8girBSIrn8bFHsj_siufxsUeyP-4Sa57nCGqqkSbd47HIoXwEYAZMYRtErYkruT_vW0fu9&_nc_ohc=faUXUPC0kQ8AX-R2Hzt&_nc_ht=scontent-lim1-1.xx&oh=00_AfBNaHk_ayRCh3PFaKF5k_TMycD8pxb8J219-W0zUbJWiA&oe=64026F3F",
              },
              {},
            ],
          },
        ],
      },
    },
  ];
  if (req.query.id) {
    ministres = ministres.filter((i) => {
      return i.id == req.query.id;
    });
    return res.status(200).json({ ministres });
  }
  ministres = ministres.map((i) => {
    return {
      id: i.id,
      img: i.img,
      content: i.content,
      descripcion: i.descripcion,
      title: i.title,
    };
  });

  return res.status(200).json({ ministres });
}
