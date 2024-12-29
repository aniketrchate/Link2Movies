// JavaScript Array of movie links
const movieLinks = [
    { url: "https://1cinevood.today/", text: "https://1cinevood.today/ " },
    { url: "https://1kuttymovies.net/", text: "https://1kuttymovies.net/ " },
    { url: "https://1tamilmv.ac/", text: "https://1tamilmv.ac/ " },
    { url: "https://TAMILBLASTERS.AC/", text: "https://TAMILBLASTERS.AC/ " },
    { url: "https://7hitmovies.zone/", text: "https://7hitmovies.zone/ " },
    { url: "https://app1.olamovies.download/", text: "https://app1.olamovies.download/ " },
    { url: "https://atishmkv2.store/", text: "https://atishmkv2.store/ " },
    { url: "https://bolly4u.promo/", text: "https://bolly4u.promo/ " },
    { url: "https://bollyflix.ind.in/", text: "https://bollyflix.ind.in/ " },
    { url: "https://downloadhub.ceo/", text: "https://downloadhub.ceo/ " },
    { url: "https://hdhub4u.earth/", text: "https://hdhub4u.earth/ " },
    { url: "https://hdmovieshub.life/", text: "https://hdmovieshub.life/ " },
    { url: "https://katmoviehd.phd/", text: "https://katmoviehd.phd/ " },
    { url: "https://mkvcinemas.app/", text: "https://mkvcinemas.app/ " },
    { url: "https://moviezguru.website/", text: "https://moviezguru.website/ " },
    { url: "https://moviesmod.bot/", text: "https://moviesmod.bot/ " },
    { url: "https://mp4moviez.fund/", text: "https://mp4moviez.fund/ " },
    { url: "https://9xmoviies.top/", text: "https://9xmoviies.top/ " },
    { url: "https://pagalmovies.net.tr/", text: "https://pagalmovies.net.tr/ " },
    { url: "https://thekhatrimaza.me/", text: "https://thekhatrimaza.me/ " },
    { url: "https://themoviezflix.ae.org/", text: "https://themoviezflix.ae.org/ " },
    { url: "https://todaypk.com.pk/", text: "https://todaypk.com.pk/ " },
    { url: "https://vegamovies.am/", text: "https://vegamovies.am/ " },
    { url: "https://vegamovies.ps/", text: "https://vegamovies.ps/ " },
    { url: "https://worldfree4u.promo/", text: "https://worldfree4u.promo/ " },
    { url: "https://www.480ptvseries.com/", text: "https://www.480ptvseries.com/ " },
    { url: "https://www.6filmywap.com/", text: "https://www.6filmywap.com/ " },
    { url: "https://www.filmydhoom.com.pl/", text: "https://www.filmydhoom.com.pl/ " },
    { url: "https://www.filmyzilla.com.fj/", text: "https://www.filmyzilla.com.fj/ " },
    { url: "https://nyaa.si/", text: "https://nyaa.si/ " }
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
