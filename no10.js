const nama = [
    {nama: "meyta", kelas: "xi rpl 1"},
    {nama: "mega", kelas: "xi rpl 1"},
    {nama: "sri", kelas: "xi rpl 1"},
    {nama: "alipa", kelas: "xi rpl 2"},
    {nama: "dewi", kelas: "xi rpl 3"},
    {nama: "salma", kelas: "xi rpl 2"},
    {nama: "ilham", kelas: "xi rpl 1"},
];
const cari = nama.filter(item => {
    const tampil = {}
    return tampil, item.kelas  == "xi rpl 1"
})
console.log(cari);