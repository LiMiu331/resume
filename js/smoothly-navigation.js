let aTags = document.querySelectorAll('nav.menu > ul >li>a')

        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault() //阻止默认动作
                let a = x.currentTarget
                let href = a.getAttribute('href') //#siteAbout
                let element = document.querySelector(href)
                let top = element.offsetTop

                let currentTop = window.scrollY
                let targetTop = top - 80
                const coords = {
                    y: currentTop
                }; // Start at (0, 0)
                const tween = new TWEEN.Tween(coords)
                    .to({
                        y: targetTop
                    }, 1000)
                    .easing(TWEEN.Easing.Quadratic.InOut)
                    .onUpdate(() => {
                        window.scrollTo(0, coords.y);
                    })
                    .start();
            }
        }