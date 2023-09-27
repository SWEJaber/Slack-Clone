const Namespace = require("../classes/Namespace")
const Room = require("../classes/Room")


const wiki = new Namespace
(
    0,
    "Wikipedia",
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png",
    '/wiki'
)

wiki.addRoom(new Room(0, "New Articles", 0));
wiki.addRoom(new Room(1, "Editors", 0));
wiki.addRoom(new Room(2, "Other", 0))

const mozilla = new Namespace
(
    1,
    "Mozilla Firefox",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
    '/mozilla'
)

mozilla.addRoom(new Room(0, "Firefox", 1));
mozilla.addRoom(new Room(1, "SeaMonkey", 1));
mozilla.addRoom(new Room(2, "SpiderMonkey", 1))
mozilla.addRoom(new Room(3, "Rust", 1))

const linux = new Namespace
(
    2,
    "Linux",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1727px-Tux.svg.png",
    '/linux'
)

linux.addRoom(new Room(0, "Debian", 2));
linux.addRoom(new Room(1, "Red Hat", 2));
linux.addRoom(new Room(2, "Ubuntu", 2))
linux.addRoom(new Room(3, "Mac OS", 2))

const namespaces = [wiki, mozilla, linux]

module.exports = namespaces