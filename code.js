'use strict'

function refreshCodes(element)
{
	if (element.target.value === "")
		element.target.value = "Hi";

	const bcids = [
			"qrcode",  "code128",    "code16k", "code49", "azteccode", "azteccodecompact",
			"codeone", "datamatrix", "datamatrixrectangular", "datamatrixrectangularextension", "dotcode"
	];
	let canvas = document.createElement("canvas");
	let options = {
		text: element.target.value,
		scale: 3.5,
		includetext: true,
		textalign: "center"
	};

	for (let i in bcids)
	{
		options.bcid = bcids[i];
		try {
			bwipjs.toCanvas(canvas, options);
			$(`img-${i}`).src = canvas.toDataURL("image/png");
		} catch (e) {
			console.error(e);
		}
	}
}

function codeMain()
{
	let textBox = $("code-text-box");
	textBox.addEventListener("change", refreshCodes);
	textBox.value = "Hello, World!";
	refreshCodes({ target: textBox });
}

codeMain();
