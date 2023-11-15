export function ColorPlayer(initialColor: any, cb: any): any {
    class InitialColor {
        Lv: number;
        Cv: number;
        Hv: number;
        av: number;
        
        constructor(value: { split: (arg0: string) => [any, any, any, any, any]; }) {
            const [Lv, Cv, Hv, , av] = value.split(' ');
            this.Lv = parseFloat(Lv);
            this.Cv = parseFloat(Cv);
            this.Hv = parseFloat(Hv);
            this.av = parseFloat(av);
        }

        get L() {
            return this.Lv;
        }

        set L(v) {
            if (v < 0 || v > 100) {
                this.Lv = Math.min(100, Math.max(0, v));
            } else {
                this.Lv = v;
            }
        }

        get C() {
            return this.Cv;
        }

        set C(v) {
            if (v < 0 || v > 0.37) {
                this.Cv = Math.min(0.37, Math.max(0, v));
            } else {
                this.Cv = v;
            }
        }

        get H() {
            return this.Hv;
        }

        set H(v) {
            if (v < 0 || v > 360) {
                this.Hv = Math.min(360, Math.max(0, v));
            } else {
                this.Hv = v;
            }
        }

        get a() {
            return this.av;
        }

        set a(v) {
            if (v < 0 || v > 1) {
                this.av = Math.min(1, Math.max(0, v));
            } else {
                this.av = v;
            }
        }

        toString() {
            return `${this.L.toFixed(2)}% ${this.C.toFixed(2)} ${this.H.toFixed(2)} / ${this.a.toFixed(2)}`
        }
    }

    return function decorator(target, { kind, addInitializer }) {
        if (kind === "class") {
            return class extends target {
                cb = cb;
                initialColor = new InitialColor(initialColor);
                constructor() {
                    super(target, { kind, addInitializer });
                    cb(new InitialColor(initialColor).toString());
                }
            }
        }
    }
}

export function Color(component, coeff) {
    return function (fn, { kind }) {
        if (kind === "method") {
            return function (octave) {
                this.initialColor[component] += ((parseFloat(octave) - 3) * parseFloat(coeff));
                this.cb(this.initialColor.toString());
                fn.call(this.octave);
            }
        }

        return fn;
    }
}
