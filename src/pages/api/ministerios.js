export default function Ministerios(req, res) {
  let ministres = [
    {
      id: 1,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/273919172_498938695155890_2838185720628832009_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=V4j0CCkTcxoAX90ZRRM&_nc_ht=scontent-lim1-1.xx&oh=00_AfCI-iZ9PBEkVdpDAc6F-pYa2B34347hM6fZyp6SWFUjpQ&oe=63FF1448",
      content:
        "Jóvenes dispuestos a amar y servir a nuestro creador ❤ #jniferreñafe #jninamovible",
      title: "Ministerio NPA - Ferreñafe",
    },
    {
      id: 2,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332071752_935157594326698_8335509709515116299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFMPknota72Zjor5qGWoBuRKtrbmaImrg4q2tuZoiauDjwee0bcBYeCeObW1EGzbSdCYGYnjjTtiUZGfzTVS0Q6&_nc_ohc=W1EibJVj-qMAX-dD3Sz&tn=WXA5-0qmUL9SdBJP&_nc_ht=scontent-lim1-1.xx&oh=00_AfAIACkGg3LFqYYdFNM_JlQdZA5t3dpDPhCGb6kvplgueQ&oe=63FF146B",
      content: "",
      title: "Ministerio Torre Fuerte",
    },
    {
      id: 3,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299656041_3190738724523986_3755858983783044774_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFqnG8IdKXZJlo8Wj4aoLB1U-c24e_5pYxT5zbh7_mljJNaQbD8bP66wX7SxDKe9lMjJCW_TRvlRrWlphgh75CC&_nc_ohc=5oejXTsE7uAAX_xS4yF&_nc_ht=scontent-lim1-1.xx&oh=00_AfDVjWvykocN3vy6FrP9OosgBgCuIP2IQ2ZHDWysSQ_Azw&oe=63FF4DD5",
      content: "",
      title: "Ministerio Somos Uno",
    },
    {
      id: 4,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/299656041_3190738724523986_3755858983783044774_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFqnG8IdKXZJlo8Wj4aoLB1U-c24e_5pYxT5zbh7_mljJNaQbD8bP66wX7SxDKe9lMjJCW_TRvlRrWlphgh75CC&_nc_ohc=5oejXTsE7uAAX_xS4yF&_nc_ht=scontent-lim1-1.xx&oh=00_AfDVjWvykocN3vy6FrP9OosgBgCuIP2IQ2ZHDWysSQ_Azw&oe=63FF4DD5",
      content: "",
      title: "Ministerio Somos Uno",
    },
    {
      id: 5,
      img: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/332319985_1567176190460688_7210210718170988070_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFPCpjDvyNQ-s9gpkDIBVB6r3B_WKLrcuyvcH9Youty7J1_04272Q3lIn2KO1Maoimu6ryuxfQ6ROScp8KRWf_r&_nc_ohc=vgWJsNS4Y1AAX_5qu5B&_nc_ht=scontent-lim1-1.xx&oh=00_AfDgHAxnN0PGYSGRv5jnU9bXL7dr4oEDL3cJrZ_Jyczn5w&oe=64004ACF",
      content: "",
      title: "Ministerio Sembrando Futuro",
    },
  ];
  if (req.query.id) {
    ministres = ministres.filter((i) => {
      return i.id == req.query.id;
    });
    return res.status(200).json({ ministres });
  }

  return res.status(200).json({ ministres });
}
