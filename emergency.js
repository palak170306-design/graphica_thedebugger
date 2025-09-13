function getSeverity(title, message) {
    const text = (title + " " + message).toLowerCase();

    const criticalKeywords = ["urgent", "hospital", "injury", "trapped", "critical", "emergency", "blood"];
    const mediumKeywords = ["food", "water", "shelter", "medicine", "help needed"];
    const lowKeywords = ["info", "guidance", "support", "query"];

    for (let word of criticalKeywords) {
        if (text.includes(word)) return "Critical";
    }
    for (let word of mediumKeywords) {
        if (text.includes(word)) return "Medium";
    }
    for (let word of lowKeywords) {
        if (text.includes(word)) return "Low";
    }

    return "Medium"; 
}