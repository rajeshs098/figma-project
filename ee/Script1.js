// Assuming you have a container element in your HTML where you want to render the assets
const container = document.getElementById('assetsContainer');

// Iterate over each task in the JSON
for (const task of jsonData.tasks) {
    // Iterate over each asset in the task
    for (const asset of task.assets) {
        // Create a new asset container element
        const assetContainer = document.createElement('div');
        assetContainer.className = 'asset';

        // Create and set the asset title
        const titleElement = document.createElement('h3');
        titleElement.textContent = asset.asset_title;
        assetContainer.appendChild(titleElement);

        // Create and set the asset description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = asset.asset_description;
        assetContainer.appendChild(descriptionElement);

        // Create and set the asset content based on its type
        if (asset.asset_content_type === 'video') {
            const videoElement = document.createElement('iframe');
            videoElement.src = asset.asset_content;
            videoElement.width = '560';
            videoElement.height = '315';
            assetContainer.appendChild(videoElement);
        } else if (asset.asset_content_type === 'threadbuilder' || asset.asset_content_type === 'article') {
            const linkElement = document.createElement('a');
            linkElement.href = asset.asset_content;
            linkElement.textContent = 'Read More';
            assetContainer.appendChild(linkElement);
        }

        // Append the asset container to the main container
        container.appendChild(assetContainer);
    }
}
