class System {
    public static isProduction() {
        return process.env.NODE_ENV === "production";
    }
}

export default System