{ pkgs }:

let
  # Import the nightly Rust toolchain from your file
  rustToolchain = pkgs.rust-bin.fromRustupToolchainFile (./rust-toolchain.toml);

  # Packages needed for PKG_CONFIG_PATH
  pkgConfigDeps = [
    pkgs.gdk-pixbuf
    pkgs.glib
    pkgs.gtk3
  ];

  # Collect all pkgconfig directories for the shellHook
  pkgConfigPaths = pkgs.lib.makeBinPath (pkgs.lib.map (p: "${p}/lib/pkgconfig") pkgConfigDeps);

in
pkgs.mkShell {
  # 1. Environment Variables (for Android)
  # NOTE: These paths are not standard Nixpkg attributes and must be exported via shellHook
  ANDROID_HOME = "${pkgs.android-sdk}/share/android-sdk";
  ANDROID_SDK_ROOT = "${pkgs.android-sdk}/share/android-sdk";
  JAVA_HOME = pkgs.jdk.home;

  # 2. Main Packages (for PATH and linking)
  packages = [
    pkgs.fish # Shell executable
    pkgs.pkg-config # Tool to find C libraries
    rustToolchain # Rust, Cargo, and targets (from rust-toolchain.toml)
    pkgs.android-sdk
    pkgs.gradle
    pkgs.jdk

    # GTK/Tauri Dependencies
    pkgs.at-spi2-atk
    pkgs.atkmm
    pkgs.cairo
    pkgs.gdk-pixbuf # Needed explicitly to ensure presence
    pkgs.glib
    pkgs.gtk3
    pkgs.harfbuzz
    pkgs.libsoup_3
    pkgs.pango
    pkgs.webkitgtk_4_1
    pkgs.openssl
    pkgs.gobject-introspection
    pkgs.cargo-tauri
    pkgs.nodejs
    pkgs.librsvg
    pkgs.nixgl.nixGLIntel
  ];

  # 3. Shell Hook (for environment setup and launching Fish)
  shellHook = ''
    # Manually export the PKG_CONFIG_PATH. This fixes the gdk-pixbuf-sys errors.
    export PKG_CONFIG_PATH="${pkgConfigPaths}:$PKG_CONFIG_PATH"

    echo "Entered devshell"

    # Replace the current Bash shell with Fish
    exec ${pkgs.fish}/bin/fish
  '';
}
