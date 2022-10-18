function shuffle_it(sentence, password, reverse = false) {
    //shuffles the words of a sentence based on some password/seed

    //all small caps
    sentence = sentence.toLowerCase();
    //conversion to words
    let words = sentence.split(" ");
    //conversion
    for (let j = 0, wlen = words.length, plen = password.length; j < wlen; j++) {
        const ind = reverse ? j : wlen - 1 - j;
        const value = password.charCodeAt(ind % plen) % wlen;
        [words[value], words[ind]] = [words[ind], words[value]]
    }
    return words.join(" ")
}

module.exports = { shuffle_it }