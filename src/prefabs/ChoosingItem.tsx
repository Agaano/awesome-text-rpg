import { ItemType } from "../types/types"

type statsType = {
			damage: number;
			shield: number;
			agility: number;
			fortune: number;
			massDamage: number;
}


export default ({item, firstStats, secondStats} : {item: ItemType, firstStats: statsType, secondStats: statsType}) => {
	return (
		<div>
			<p>
				<span style={{color: item.rare === 'basic' ? '#aaa' : item.rare === 'rare' ? '#0f0' : item.rare === 'epic' ? 'violet' : 'gold'}} >{item.name}</span>
			</p>
			<div>
				{firstStats.damage !==
					secondStats.damage && (
					<div>
						Урон: {firstStats.damage} {'->'}{' '}
						<span
							style={{
								color:
									firstStats.damage <
									secondStats.damage
										? '#0f0'
										: '#f00',
							}}
						>
							{secondStats.damage}
						</span>
					</div>
				)}
				{firstStats.shield !==
					secondStats.shield && (
					<div>
						Защита: {firstStats.shield} {'->'}{' '}
						<span
							style={{
								color:
									firstStats.shield <
									secondStats.shield
										? '#0f0'
										: '#f00',
							}}
						>
							{secondStats.shield}
						</span>
					</div>
				)}
				{firstStats.agility !==
					secondStats.agility && (
					<div>
						Ловкость: {firstStats.agility}% {'->'}{' '}
						<span
							style={{
								color:
									firstStats.agility <
									secondStats.agility
										? '#0f0'
										: '#f00',
							}}
						>
							{secondStats.agility}%
						</span>
					</div>
				)}
				{firstStats.fortune !==
					secondStats.fortune && (
					<div>
						Удача: {firstStats.fortune}% {'->'}{' '}
						<span
							style={{
								color:
									firstStats.fortune <
									secondStats.fortune
										? '#0f0'
										: '#f00',
							}}
						>
							{secondStats.fortune}%
						</span>
					</div>
				)}
				{firstStats.massDamage !==
					secondStats.massDamage && (
					<div>
						Масс. урон: {firstStats.massDamage}% {'->'}{' '}
						<span
							style={{
								color:
									firstStats.massDamage <
									secondStats.massDamage
										? '#0f0'
										: '#f00',
							}}
						>
							{secondStats.massDamage}%
						</span>
					</div>
				)}
			</div>
		</div>
	)
}