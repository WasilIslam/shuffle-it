# Shuffle-it

Encrypts/ decrypts text by shuffling words using a seed/ password.

## Installation

```bash
npm install shuffle-it
```

## Example

```javascript
const { shuffle_it } = require("shuffle-it")

const text="This text needs to be encrypted";

//shuffle words
const encrypted_text = shuffle_it( text, "password123", true);

//get back the orignal text
const decrypted_text = shuffle_it( encrypted_text, "password123",false);

//print
console.log( encrypted_text );
```

### Parameters

<!-- TABLE_GENERATE_START -->

| Parameters | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `sentence` | `string`  | The text which needs to be encrypted |
| `password` | `string`  | Password/ Seed to shuffle the text.  |
| `reverse`  | `boolean` | decrypts if true, default: false     |
<!-- TABLE_GENERATE_END -->




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

____

Made with 🧠 by wasil