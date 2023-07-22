$(function () {
    (async () => {
        const queryOptions = { active: true, currentWindow: true };
        const [tab] = await chrome.tabs.query(queryOptions);
        const message = tab.title + " - " + tab.url
        $("#message").val(message);

        chrome.storage.sync.get('skipFlag', function (data) {
            if (data.skipFlag) {
                window.open("https://misskey.io/share?text=" + encodeURIComponent(message), "_blank");
                window.close();
            }
        });
    })()

    $("#share").on("click", () => {
        const message = $("#message").val();
        window.open("https://misskey.io/share?text=" + encodeURIComponent(message), "_blank");
    })

    $("#close").on("click", () => {
        window.close();
    })

    $("#option-link").on("click", (e) => {
        e.preventDefault();
        chrome.runtime.openOptionsPage();
    })
});
