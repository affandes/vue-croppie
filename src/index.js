import _VueCroppie_ from '../src/components/VueCroppie/VueCroppie'
import {_registerComponent, _use} from "../src/utils/plugins";

const VueCroppie = {
    install(Vue) {
        _registerComponent(Vue, _VueCroppie_);
    }
};

_use(VueCroppie);

export default VueCroppie