import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons"

library.add(faEye, faLock, faHome);
dom.watch(); //replacement of i to svg tags and configure a MutationObserver
