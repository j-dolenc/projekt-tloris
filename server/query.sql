with dat
AS
(
    select * from datoteke
    where id = 3
    union ALL
        select *
        from dat inner join datoteke d on dat.stars_id = d.id
        
)
select * from dat;