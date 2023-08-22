function revealToSpan() {
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");

    child.textContent = elem.textContent;
    parent.appendChild(child);
    elem.innerHTML= "";
    elem.appendChild(parent);
});
}
revealToSpan();

gsap.to(".parent .child", {
    y: "-100%",
    duration: 2,
    delay: 2,
    ease: Expo.easeInOut
})
