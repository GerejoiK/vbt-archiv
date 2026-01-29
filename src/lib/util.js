export const getColor = item => {
	const diff = item.teilnehmer.map(e => Object.values(e?.runden || {}).length).reduce((a, b) => a - b);
	if (diff > 0 || (item.teilnehmer[0].punkte || 0) > (item.teilnehmer[1].punkte || 0)) {
		return ["green", "red"];
	} else if (diff < 0 || (item.teilnehmer[0].punkte || 0) < (item.teilnehmer[1].punkte || 0)) {
		return ["red", "green"];
	}
	return ["", ""];
};
