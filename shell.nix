with import ./nixpkgs { };
mkShell { buildInputs = [ yarn nodejs-12_x nixfmt nodePackages.prettier ]; }
