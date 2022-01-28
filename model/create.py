import pandas as pd
import textblob

df = pd.read_csv('model\data.csv')

print(df['sentiment'].value_counts())