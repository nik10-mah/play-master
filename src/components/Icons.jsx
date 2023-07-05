import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faLock } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons"

library.add(faEye, faLock, faHome, faEyeSlash);
dom.watch(); //replacement of i to svg tags and configure a MutationObserver
