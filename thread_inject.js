var thread_title = $('#breadcrumb strong').text().trim();
if (thread_title)
  chrome.extension.sendRequest({no_longer_new: thread_title});
