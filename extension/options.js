$(function () {
    chrome.storage.sync.get('skipFlag', function (data) {
        $("#skipFlag").prop('checked', data.skipFlag);
    });

    $("#skipFlag").on("change", (e) => {
        chrome.storage.sync.set({ skipFlag: e.target.checked });
    })
});
