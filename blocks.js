let intervalID;
const init = async () => {
  const { bitcoin: { blocks } } = await mempoolJS({
    hostname: 'mempool.space'
  });
  const getBlocks = await blocks.getBlocks({ startHeight: 730000 });
  const blocksData = JSON.parse(JSON.stringify(getBlocks, undefined, 2));
  const result = document.getElementById("result");

  result.innerHTML = "";

  blocksData.forEach((block) => {
    let blockDiv = document.createElement("div");
    blockDiv.classList.add("block");
    let height = document.createElement("div");
    let timestamp = document.createElement("div");
    let weight = document.createElement("div");
    let tx_count = document.createElement("div");

    height.classList.add("height");
    height.textContent = "Height :" + block.height;
    timestamp.classList.add("timestamp");

    // Here is the timestamp calculation
    let blockTime = new Date(block.timestamp * 1000);
    let currentTime = new Date();
    let timeDiff = Math.abs(currentTime - blockTime);
    let diffMinutes = Math.floor((timeDiff / 1000) / 60);
    let diffHours = Math.floor(diffMinutes / 60);
    let diffDays = Math.floor(diffHours / 24);
    let timeAgo;
    if (diffMinutes < 60) {
      timeAgo = diffMinutes + " minutes ago";
    } else if (diffHours < 24) {
      timeAgo = diffHours + " hours ago";
    } else {
      timeAgo = diffDays + " days ago";
    }
    timestamp.textContent = "Timestamp :" + timeAgo;

    weight.classList.add("weight");
    weight.textContent = "Weight :" + block.weight;
    tx_count.classList.add("tx-count");
    tx_count.textContent = "Tx Count :" + block.tx_count;

    blockDiv.appendChild(height);
    blockDiv.appendChild(timestamp);
    blockDiv.appendChild(weight);
    blockDiv.appendChild(tx_count);
    result.appendChild(blockDiv);
  });

  const menuLinks = document.querySelectorAll("#menuBar a");
  menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", (event) => {
      event.target.style.color = "gray";
    });
    link.addEventListener("mouseleave", (event) => {
      event.target.style.color = "white";
    });
  });
  intervalID = setInterval(updateData, 120000);
};


const updateData = async () => {
  const { bitcoin: { blocks } } = await mempoolJS({
    hostname: 'mempool.space'
  });
  const getBlocks = await blocks.getBlocks({ startHeight: 730000 });
  console.log(getBlocks);
  const blocksData = JSON.parse(JSON.stringify(getBlocks, undefined, 2));
  const result = document.getElementById("result");

  result.innerHTML = "";

  blocksData.forEach((block) => {
    let blockDiv = document.createElement("div");
    blockDiv.classList.add("block");
    let height = document.createElement("div");
    let timestamp = document.createElement("div");
    let weight = document.createElement("div");
    let tx_count = document.createElement("div");

    height.classList.add("height");
    height.textContent = "Height :" + block.height;
    timestamp.classList.add("timestamp");

    // Here is the timestamp calculation
    let blockTime = new Date(block.timestamp * 1000);
    let currentTime = new Date();
    let timeDiff = Math.abs(currentTime - blockTime);
    let diffMinutes = Math.floor((timeDiff / 1000) / 60);
    let diffHours = Math.floor(diffMinutes / 60);
    let diffDays = Math.floor(diffHours / 24);
    let timeAgo;
    if (diffMinutes < 60) {
      timeAgo = diffMinutes + " minutes ago";
    } else if (diffHours < 24) {
      timeAgo = diffHours + " hours ago";
    } else {
      timeAgo = diffDays + " days ago";
    }
    timestamp.textContent = "Timestamp :" + timeAgo;

    weight.classList.add("weight");
    weight.textContent = "Weight :" + block.weight;
    tx_count.classList.add("tx-count");
    tx_count.textContent = "Tx Count :" + block.tx_count;

    blockDiv.appendChild(height);
    blockDiv.appendChild(timestamp);
    blockDiv.appendChild(weight);
    blockDiv.appendChild(tx_count);
    result.appendChild(blockDiv);
  });

  const menuLinks = document.querySelectorAll("#menuBar a");
  menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", (event) => {
      event.target.style.color = "gray";
    });
    link.addEventListener("mouseleave", (event) => {
      event.target.style.color = "white";
    });
  });
};


init();

