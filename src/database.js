const characters = [
    {
        id: 1,
        name: "GOLDEN FREDDY",
        img: "https://steamuserimages-a.akamaihd.net/ugc/1845921893356047750/3DC286F225DC8A563F5581239436711EA33B15EB/?imw=512&imh=384&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    },
    {
        id: 2,
        name: "SANS",
        img: "https://easydrawingguides.com/wp-content/uploads/2020/10/how-to-draw-sans-from-undertale-featured-image-1200.png",
    },
    {
        id: 3,
        name: "FLOWEY",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNxFeRBKthQhF9vEWfxDwhU-QRTBVolaoHAAuEYj52i4hiro3c325B0DfE1i87Pjo6fPg&usqp=CAU",
    },
    {
        id: 4,
        name: "PAPYRUS",
        img: "https://w7.pngwing.com/pngs/110/987/png-transparent-undertale-paper-cyperus-papyrus-papyrus-miscellaneous-game-food.png",
    },
    {
        id: 5,
        name: "METATON",
        img: "https://w7.pngwing.com/pngs/14/50/png-transparent-undertale-mettaton-games-undertale-thumbnail.png",
    },
    {
        id: 6,
        name: "MECHA GODZILLA",
        img: "https://http2.mlstatic.com/D_NQ_NP_655952-MLU70948336048_082023-O.webp",
    },
    {
        id: 7,
        name: "SKAR KING",
        img: "https://sm.ign.com/ign_br/screenshot/default/sk1_abgn.png",
    },
    {
        id: 8,
        name: "TORIEL",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKd_nptIgsOHUYjswSuCA8iavIupqfDd4hyyLUNT5aOAHPCEVq0CwJzdjEiUDY3Yh2uD4&usqp=CAU",
    },
    {
        id: 9,
        name: "LINK",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEoJXiGOQ8lbo0vydvvg6ObbHeiUqj2I_3A&s",
    },
    {
        id: 10,
        name: "ZELDA",
        img: "https://www.adrenaline.com.br/wp-content/uploads/2023/07/Zelda-Tears-of-the-Kingdom-ganha-novo-patch-que-elimina-duplicacao-de-itens.jpg",
    },
    {
        id: 11,
        name: "UNDYNE",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d04bb2ae-5d77-4eb2-b71e-388464917733/d9gcs0e-d0ca8d0e-8af1-4e27-be7c-c73fe93a04b1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwNGJiMmFlLTVkNzctNGViMi1iNzFlLTM4ODQ2NDkxNzczM1wvZDlnY3MwZS1kMGNhOGQwZS04YWYxLTRlMjctYmU3Yy1jNzNmZTkzYTA0YjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IsoWXg_vEyHzfP35Gn4L0hgqkKNQzcHuOBACRVoVrko",
    },
    {
        id: 12,
        name: "BONNIE",
        img: "https://i.pinimg.com/474x/90/9c/2e/909c2e7400d48ef23f29b06e5d60cbd0.jpg",
    },
    {
        id: 13,
        name: "FOXY",
        img: "https://img.quizur.com/f/img601055e7cb8815.15815150.jpeg?lastEdited=1611683323",
    },
    {
        id: 14,
        name: "CIRCUS BABY",
        img: "https://pm1.aminoapps.com/7936/617584de0f9809362ec5b6820a4a3aa9fa5ccb8cr1-736-1023v2_hq.jpg",
    },
    {
        id: 15,
        name: "KING GHIDORAH",
        img: "https://pm1.aminoapps.com/8478/d0264653644a0740cb7df0c3e867687a12bc5025r1-499-345v2_uhq.jpg",
    },
    {
        id: 16,
        name: "SHIMO",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b40f955b-4b74-4583-8435-8787dfcd413b/dh51vf8-ae72adae-b49b-48c2-a8c3-4b0db077f3f4.jpg/v1/fill/w_1280,h_1280,q_75,strp/shimo_by_spacedragon14_dh51vf8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2I0MGY5NTViLTRiNzQtNDU4My04NDM1LTg3ODdkZmNkNDEzYlwvZGg1MXZmOC1hZTcyYWRhZS1iNDliLTQ4YzItYThjMy00YjBkYjA3N2YzZjQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.-K74yH1ynkbd9fZODlPcm9MBkuuYFuCKnVIwVwJbyp8",
    },
    {
        id: 17,
        name: "TIAMAT",
        img: "https://i.ytimg.com/vi/vnpMT6ENgWw/maxresdefault.jpg",
    },
    {
        id: 18,
        name: "TOY FREDDY",
        img: "https://p.turbosquid.com/ts-thumb/xt/KSp7mP/cU/search/png/1694391486/600x600/fit_q87/fba7aa960c34a6fbed04db7204d6c5595f0a237b/search.jpg",
    },
    {
        id: 19,
        name: "NIGHTMARE CHICA",
        img: "https://pm1.aminoapps.com/6245/2c619db9db49e9eff9048a4b4ebedc79a44c517a_00.jpg",
    },
    {
        id: 20,
        name: "PLUSHTRAP",
        img: "https://media.sketchfab.com/models/efbe07218fca482fb9520a877a7cd08b/thumbnails/62ec576e964c4e919d4e2dbe603b548a/c6bf7bceadd5492c93cf7cac99bcb7cb.jpeg",
    },
]

export default characters;