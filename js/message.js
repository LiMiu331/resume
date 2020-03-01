
AV.init({
    appId: "jne2FpPTWmfoXmGbvM6sG0SO-gzGzoHsz",
    appKey: "LlfXebWkL9eVOUWmRSx01R53",
    serverURLs: "https://jne2fppt.lc-cn-n1-shared.com"
});

var query = new AV.Query('Message');
query.find('').then(function (messages) {
    let array = messages.map((item) => item._serverData)
    console.log(array)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.name +':' + item.info
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        
    })
}, function (error) {
        alert('留言失败')
});


let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.set({
        'info': content,
        'name':name
    });
    message.save().then(function (Object) {
        alert('谢谢你，留言成功')
        let li = document.createElement('li')
        li.innerText = Object.attributes.name +':' + Object.attributes.info
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        
    })
})


