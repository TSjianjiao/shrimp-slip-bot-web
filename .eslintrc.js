module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:react/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'react/jsx-equals-spacing': [2, 'always'],
    'react/jsx-curly-spacing': [2, {
      'when': 'always'
    }],
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'always'
    }],
    'template-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/prop-types': 0
  }
}
