module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
       
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-react",
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "react",
        "react-hooks"
    ],
    "overrides": [
        {
          "files": ['*.ts', '*.tsx'],
          "extends": [
            "plugin:@typescript-eslint/recommended",
            "plugin:@typescript-eslint/recommended-requiring-type-checking",
          ],
    
          "parserOptions": {
            "project": "tsconfig.json",
            "tsconfigRootDir": __dirname,
            "sourceType": "module",
          },
        },
      ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": [
            "off",
            null
        ],
        "@typescript-eslint/triple-slash-reference": [
            "error",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unified-signatures": "error",
        "array-callback-return": "warn",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "off"
        ],
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "error",
        "default-case": [
            "warn",
            {
                "commentPattern": "^no default$"
            }
        ],
        "dot-location": [
            "warn",
            "property"
        ],
        "dot-notation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "getter-return": "warn",
        "guard-for-in": "error",
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "indent": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "linebreak-style": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-array-constructor": "warn",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        // "no-console": "error",
        "no-const-assign": "warn",
        "no-control-regex": "warn",
        "no-debugger": "error",
        "no-delete-var": "warn",
        "no-dupe-args": "warn",
        "no-dupe-class-members": "warn",
        "no-dupe-keys": "warn",
        "no-duplicate-case": "warn",
        "no-empty": "error",
        "no-empty-character-class": "warn",
        "no-empty-function": "error",
        "no-empty-pattern": "warn",
        "no-eval": "error",
        "no-ex-assign": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-func-assign": "warn",
        "no-implied-eval": "warn",
        "no-invalid-regexp": "warn",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": [
            "warn",
            {
                "allowLoop": true,
                "allowSwitch": false
            }
        ],
        "no-lone-blocks": "warn",
        "no-loop-func": "warn",
        "no-mixed-operators": [
            "warn",
            {
                "groups": [
                    [
                        "&",
                        "|",
                        "^",
                        "~",
                        "<<",
                        ">>",
                        ">>>"
                    ],
                    [
                        "==",
                        "!=",
                        "===",
                        "!==",
                        ">",
                        ">=",
                        "<",
                        "<="
                    ],
                    [
                        "&&",
                        "||"
                    ],
                    [
                        "in",
                        "instanceof"
                    ]
                ],
                "allowSamePrecedence": false
            }
        ],
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "off",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-symbol": "warn",
        "no-new-wrappers": "error",
        "no-obj-calls": "warn",
        "no-octal": "warn",
        "no-octal-escape": "warn",
        "no-redeclare": "warn",
        "no-regex-spaces": "warn",
        "no-restricted-globals": [
            "error",
            "addEventListener",
            "blur",
            "close",
            "closed",
            "confirm",
            "defaultStatus",
            "defaultstatus",
            "event",
            "external",
            "find",
            "focus",
            "frameElement",
            "frames",
            "history",
            "innerHeight",
            "innerWidth",
            "length",
            "location",
            "locationbar",
            "menubar",
            "moveBy",
            "moveTo",
            "name",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onresize",
            "onunload",
            "open",
            "opener",
            "opera",
            "outerHeight",
            "outerWidth",
            "pageXOffset",
            "pageYOffset",
            "parent",
            "print",
            "removeEventListener",
            "resizeBy",
            "resizeTo",
            "screen",
            "screenLeft",
            "screenTop",
            "screenX",
            "screenY",
            "scroll",
            "scrollbars",
            "scrollBy",
            "scrollTo",
            "scrollX",
            "scrollY",
            "self",
            "status",
            "statusbar",
            "stop",
            "toolbar",
            "top"
        ],
        "no-restricted-properties": [
            "error",
            {
                "object": "require",
                "property": "ensure",
                "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
            },
            {
                "object": "System",
                "property": "import",
                "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
            }
        ],
        "no-restricted-syntax": [
            "warn",
            "WithStatement"
        ],
        "no-script-url": "warn",
        "no-self-assign": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow": "error",
        "no-shadow-restricted-names": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "warn",
        "no-this-before-super": "warn",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unreachable": "warn",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-unused-vars": [
            "warn",
            {
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        "no-use-before-define": "off",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-escape": "warn",
        "no-useless-rename": [
            "warn",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "no-var": "error",
        "no-whitespace-before-property": "warn",
        "no-with": "warn",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padded-blocks": [
            "off",
            {
                "blocks": "never"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],
        // "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "error",
        "quote-props": "off",
        "quotes": "off",
        "radix": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/forbid-foreign-prop-types": [
            "warn",
            {
                "allowInPropTypes": true
            }
        ],
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-spacing": "off",
        "react/jsx-equals-spacing": "off",
        "react/jsx-key": "error",
        "react/jsx-no-bind": "error",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-no-target-blank": "warn",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": [
            "warn",
            {
                "allowAllCaps": true,
                "ignore": []
            }
        ],
        "react/jsx-tag-spacing": [
            "off",
            {
                "afterOpening": "allow",
                "closingSlash": "allow"
            }
        ],
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "react/jsx-wrap-multilines": "off",
        "react/no-danger-with-children": "warn",
        "react/no-direct-mutation-state": "warn",
        "react/no-is-mounted": "warn",
        "react/no-typos": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/style-prop-object": "warn",
        "require-yield": "warn",
        "rest-spread-spacing": [
            "warn",
            "never"
        ],
        "semi": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "strict": [
            "warn",
            "never"
        ],
        "unicode-bom": [
            "warn",
            "never"
        ],
        "use-isnan": "error",
        "valid-typeof": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "jsx-no-string-ref": true,
                    "prettier": true
                }
            }
        ]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};
