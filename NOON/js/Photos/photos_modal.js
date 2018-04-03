$(function() {
    $(document.getElementsByClassName('media_card_container')).on('click', function() {
        $('.enlargeImageModalSource').attr('src', $(this).children('img').attr('src'));
        $('#enlargeImageModal').modal('show');
    });
});

$(function() {
    $(document.getElementById('photos-more')).on('click', function() {
        $(document.getElementsByClassName('hidden_photos')).css('display', 'block');
        $(document.getElementById('photos-more')).css('display', 'none');
    });
});

$(function() {
    $(document.getElementById('videos-more')).on('click', function() {
        $(document.getElementsByClassName('hidden_videos')).css('display', 'block');
        $(document.getElementById('videos-more')).css('display', 'none');
    });
});