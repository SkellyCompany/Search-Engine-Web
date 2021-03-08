class System {
    public static readonly gaTrackingId: string = "UA-163966817-1"

    public static isProduction() {
        return process.env.NODE_ENV === "production";
    }
}

export default System