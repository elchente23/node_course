let socket = io();

function scrollToBottom() {
    let messages = $("#messages"),
        clientHeight = messages.prop("clientHeight"),
        scrollTop = messages.prop("scrollTop"),
        scrollHeight = messages.prop("scrollHeight"),
        newMessages = messages.children('li:last-child'),
        newMessagesHeight = newMessages.innerHeight(),
        lastMessagesHeight = newMessages.prev().innerHeight();

        if(clientHeight + scrollTop + newMessagesHeight + lastMessagesHeight >= scrollHeight) {
            messages.scrollTop(scrollHeight);
        }
}

socket.on('connect', function () {
    let params = $.deparam(window.location.search);

    socket.emit('join', params, function(error) {
        if(error) {
            alert(error);
            window.location.href = "/";
        } else {
            console.log("no error");
        }
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('updateUserList', function (users) {
    let ol = $("<ol></ol>");

    users.forEach(function(user) {
        ol.append($('<li></li>').text(user));
    });

    $("#users").html(ol);
});

socket.on('newMessage', function (message) {
    let formattedDate = moment(message.createdAt).format('h:mm a');

    let template = $("#message-template").html(),
        html = Mustache.render(template, {
            text: message.text,
            from: message.from,
            createdAt: formattedDate
        });

    $("#messages").append(html);
    scrollToBottom();
});

socket.on('newLocationMessage', function(message) {
    
    let formattedDate = moment(message.createdAt).format('h:mm a');

    let template = $("#location-message-template").html(),
        html = Mustache.render(template, {
            url: message.url,
            from: message.from,
            createdAt: formattedDate
        });

    $("#messages").append(html);
    scrollToBottom();
});

$("#message-form").on("submit", function(e) {
    e.preventDefault();

    let messageTextbox = $("[name=message]");

    socket.emit('createMessage', {
        text: messageTextbox.val()
    }, function() {
        messageTextbox.val("");
    });
});

let buttonLocation = $("#send-location");
buttonLocation.on("click", function() {
    if(!navigator.geolocation) {
        return alert("Geolocation not supported by your browser.");
    }
    
    buttonLocation.attr("disabled", "disabled").text("Sending location...");

    navigator.geolocation.getCurrentPosition(function (position) {
        buttonLocation.removeAttr("disabled").text("Send location");
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        alert ("Unable to fetch location");
        buttonLocation.removeAttr("disabled").text("Send location");
    });
});
