export default function JobItemButton(
    {
        tabId,
        tabName,
        tabState,
        onTogglePanel
    }
) {
    return (
        <button
            id={"tab-" + tabId}
            className={tabState === tabId ? "job-button active" : "job-button"}
            role="tab"
            aria-controls={"panel-" + tabId}
            onClick={() => onTogglePanel(tabId)}
        >
            <span>{tabName}</span>
        </button>
    )
}
