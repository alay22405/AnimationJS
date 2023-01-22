

const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Spider.png");
//ASSET_MANAGER.queueDownload("./Housee.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled=false;

	gameEngine.addEntity(new Spider(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});


