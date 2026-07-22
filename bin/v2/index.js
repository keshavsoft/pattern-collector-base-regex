const startFunc = ({ matchLine, parseRegex, showLog }) => {
    if (showLog) console.log("matchLine : ", matchLine);

    const clean = matchLine.replace(/[\r\n]/g, '');

    const parts = clean.match(parseRegex);

    if (parts) {
        return {
            variable: parts[1],
            folderName: parts[2]
        };
    };
};

export default startFunc;