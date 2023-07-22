$(function () {
    ((async () => {
        const queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        const message = tab.title + " - " + tab.url
        $("#message").val(message);
    })())

    $("#share").on("click", () => {
        const message = $("#message").val();
        window.open("https://misskey.io/share?text=" + encodeURIComponent(message), "_blank");
    })

    $("#close").on("click", () => {
        window.close();
    })
});
