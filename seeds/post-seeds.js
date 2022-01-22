const { Post } = require('../models');

const postdata = [
    {
        wine_name: 'El Vigia Family Reserva Pinot Noir', 
        wine_vintage: 2019,
        wine_type: 'Red', 
        wine_source: 'Wine Insiders',
        notes: 'Me likey ;)', 
        img_url: 'https://firebasestorage.googleapis.com/v0/b/wineshare-fc74b.appspot.com/o/FC6FB451-F47F-4C1B-B9E8-7EFBC587D0D9.jpeg?alt=media&token=c7ea19cd-f660-4cac-b54c-fd2e2025a21e', 
        user_id:1
    },
    {
        wine_name: 'Vespertine Zinfandel', 
        wine_vintage: 2017,
        wine_type: 'Red', 
        wine_source: 'Wine Insiders',
        notes: 'Too fruity for me.', 
        img_url: 'https://firebasestorage.googleapis.com/v0/b/wineshare-fc74b.appspot.com/o/63587487-97A8-49A2-A881-C5DEEC506B82.jpeg?alt=media&token=fc29fbe6-9013-4c39-8bf2-9fef8f32cfcd', 
        user_id:1
    },
    {
        wine_name: 'Fog Harbor Red Blen', 
        wine_vintage: 2018,
        wine_type: 'Red', 
        wine_source: 'Wine Insiders',
        notes: 'I could drink this ALL DAY!', 
        img_url: 'https://firebasestorage.googleapis.com/v0/b/wineshare-fc74b.appspot.com/o/EEF4DBB4-A6C7-4AA8-9FA0-9DA8CAD48238.jpeg?alt=media&token=d7209ef8-096d-481d-8320-fd952a165c9b', 
        user_id:1
    },
    {
        wine_name: 'Marquis de Bacalon Bordeaux Blanc', 
        wine_vintage: 2019,
        wine_type: 'White', 
        wine_source: 'Wine Insiders',
        notes: 'très bien', 
        img_url: 'https://firebasestorage.googleapis.com/v0/b/wineshare-fc74b.appspot.com/o/5399C7F4-28E3-4DC5-AD9A-2B9F12A78E65.jpeg?alt=media&token=287fb4fb-c1a9-42b7-8ba1-e4d61df8162b', 
        user_id:1
    },
    {
        wine_name: '', 
        wine_vintage: '',
        wine_type: '', 
        wine_source: '',
        notes: '', 
        img_url: '', 
        user_id:2
    },
    {
        wine_name: '', 
        wine_vintage: '',
        wine_type: '', 
        wine_source: '',
        notes: '', 
        img_url: '', 
        user_id:3
    },
    {
        wine_name: '', 
        wine_vintage: '',
        wine_type: '', 
        wine_source: '',
        notes: '', 
        img_url: '', 
        user_id:3
    },
    {
        wine_name: '', 
        wine_vintage: '',
        wine_type: '', 
        wine_source: '',
        notes: '', 
        img_url: '', 
        user_id:4
    },
    {
        wine_name: '', 
        wine_vintage: '',
        wine_type: '', 
        wine_source: '',
        notes: '', 
        img_url: '', 
        user_id:4
    },
    {
        wine_name: '', 
        wine_vintage: '',
        wine_type: '', 
        wine_source: '',
        notes: '', 
        img_url: '', 
        user_id:5
    }

]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;