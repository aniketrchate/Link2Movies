// JavaScript Array of movie links
const movieLinks = [
    { url: "https://1cinevood.today/", text: "cinevood" },
    { url: "https://1kuttymovies.net/", text: "kuttymovies" },
    { url: "https://1tamilmv.ac/", text: "tamilmv" },
    { url: "https://TAMILBLASTERS.AC/", text: "TAMILBLASTERS" },
    { url: "https://7hitmovies.zone/", text: "7hitmovies" },
    { url: "https://app1.olamovies.download/", text: "olamovies" },
    { url: "https://atishmkv2.store/", text: "atishmkv2" },
    { url: "https://bolly4u.promo/", text: "bolly4u" },
    { url: "https://bollyflix.ind.in/", text: "bollyflix" },
    { url: "https://downloadhub.ceo/", text: "downloadhub" },
    { url: "https://hdhub4u.earth/", text: "hdhub4u" },
    { url: "https://hdmovieshub.life/", text: "hdmovieshub" },
    { url: "https://katmoviehd.phd/", text: "katmoviehd" },
    { url: "https://mkvcinemas.how/", text: "mkvcinemas" },
    { url: "https://moviezguru.website/", text: "moviezguru" },
    { url: "https://moviesmod.bot/", text: "moviesmod" },
    { url: "https://mp4moviez.fund/", text: "mp4moviez" },
    { url: "https://9xmoviies.top/", text: "9xmoviies" },
    { url: "https://pagalmovies.net.tr/", text: "pagalmovies" },
    { url: "https://thekhatrimaza.me/", text: "thekhatrimaza" },
    { url: "https://themoviezflix.ae.org/", text: "themoviezflix" },
    { url: "https://todaypk.com.pk/", text: "todaypk" },
    { url: "https://vegamovies.am/", text: "vegamovies.am" },
    { url: "https://vegamovies.ps/", text: "vegamovies.ps" },
    { url: "https://worldfree4u.promo/", text: "worldfree4u" },
    { url: "https://www.480ptvseries.com/", text:"480ptvseries" },
    { url: "https://www.6filmywap.com/", text: "6filmywap" },
    { url: "https://www.filmydhoom.com.pl/", text: "filmydhoom" },
    { url: "https://www.filmyzilla.com.fj/", text: "filmyzilla" },
    { url: "https://nyaa.si/", text: "nyaa" }
];

// Function to add links to the page
function addLinks() {
    const linkList = document.getElementById("link-list");

    // Loop through the movieLinks array
    movieLinks.forEach(link => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "link-item");

        // Create anchor element
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.textContent = link.text;

        // Append anchor to list item, and list item to link list
        listItem.appendChild(anchor);
        linkList.appendChild(listItem);
    });
}

// Add the links when the page loads
window.onload = addLinks;
